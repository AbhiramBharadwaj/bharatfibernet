import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

const DB_NAME = "bharatfibernet";
const COLLECTION = "posts";
const CATEGORY_COLLECTION = "categories";
const VALID_STATUSES = new Set(["draft", "published", "scheduled"]);

const slugify = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const normalizeCategoryName = (value) =>
  String(value || "")
    .trim()
    .replace(/\s+/g, " ");

const ensureCategoryExists = async (db, categoryName) => {
  const normalized = normalizeCategoryName(categoryName);
  const slug = slugify(normalized);

  if (!normalized || !slug) {
    return "";
  }

  const now = new Date();
  await db.collection(CATEGORY_COLLECTION).updateOne(
    { slug },
    {
      $set: { name: normalized, updatedAt: now },
      $setOnInsert: { createdAt: now },
    },
    { upsert: true }
  );

  return normalized;
};

const ensureUniqueSlug = async (collection, baseSlug) => {
  if (!baseSlug) {
    return `post-${Date.now().toString(36)}`;
  }

  const existing = await collection.findOne({ slug: baseSlug });
  if (!existing) {
    return baseSlug;
  }

  return `${baseSlug}-${Date.now().toString(36)}`;
};

const parseDateOrNow = (value) => {
  if (!value) return new Date();
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

const isPublicPost = (post, now = new Date()) => {
  const status = post?.status || "published";
  if (status === "draft") return false;
  if (status === "scheduled") {
    const date = new Date(post?.date);
    if (Number.isNaN(date.getTime())) return false;
    return date <= now;
  }
  return true;
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  const includeAll = searchParams.get("includeAll") === "true";

  const client = await clientPromise;
  const collection = client.db(DB_NAME).collection(COLLECTION);

  if (slug) {
    const post = await collection.findOne({ slug });
    if (!includeAll && post && !isPublicPost(post)) {
      return NextResponse.json({ post: null });
    }
    return NextResponse.json({ post });
  }

  const now = new Date();
  const query = includeAll
    ? {}
    : {
        $or: [
          { status: { $exists: false } },
          { status: "published" },
          { status: "scheduled", date: { $lte: now } },
        ],
      };

  const posts = await collection.find(query).sort({ date: -1 }).toArray();
  return NextResponse.json({ posts });
}

export async function POST(request) {
  const body = await request.json();
  const { title, excerpt, category, image, date, slug, content, status } =
    body || {};

  if (!title || !excerpt || !category) {
    return NextResponse.json(
      { error: "title, excerpt, and category are required." },
      { status: 400 }
    );
  }

  const client = await clientPromise;
  const db = client.db(DB_NAME);
  const collection = db.collection(COLLECTION);
  const finalCategory = await ensureCategoryExists(db, category);

  if (!finalCategory) {
    return NextResponse.json(
      { error: "Invalid category." },
      { status: 400 }
    );
  }

  const baseSlug = slugify(slug || title || "post");
  const finalSlug = await ensureUniqueSlug(collection, baseSlug);
  const now = new Date();
  const postDate = parseDateOrNow(date);
  const normalizedStatus = String(status || "published").toLowerCase();

  if (!postDate) {
    return NextResponse.json({ error: "Invalid publish date." }, { status: 400 });
  }
  if (!VALID_STATUSES.has(normalizedStatus)) {
    return NextResponse.json({ error: "Invalid status." }, { status: 400 });
  }
  if (normalizedStatus === "scheduled" && !date) {
    return NextResponse.json(
      { error: "Scheduled posts require a publish date." },
      { status: 400 }
    );
  }

  const post = {
    title,
    excerpt,
    category: finalCategory,
    image: image || "",
    date: postDate,
    status: normalizedStatus,
    slug: finalSlug,
    content: content || "",
    createdAt: now,
    updatedAt: now,
  };

  const result = await collection.insertOne(post);
  return NextResponse.json(
    { post: { ...post, _id: result.insertedId } },
    { status: 201 }
  );
}
