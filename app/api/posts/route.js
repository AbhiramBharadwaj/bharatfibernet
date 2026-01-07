import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

const DB_NAME = "bharatfibernet";
const COLLECTION = "posts";

const slugify = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

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

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  const client = await clientPromise;
  const collection = client.db(DB_NAME).collection(COLLECTION);

  if (slug) {
    const post = await collection.findOne({ slug });
    return NextResponse.json({ post });
  }

  const posts = await collection.find({}).sort({ date: -1 }).toArray();
  return NextResponse.json({ posts });
}

export async function POST(request) {
  const body = await request.json();
  const { title, excerpt, category, image, date, slug, content } = body || {};

  if (!title || !excerpt || !category) {
    return NextResponse.json(
      { error: "title, excerpt, and category are required." },
      { status: 400 }
    );
  }

  const client = await clientPromise;
  const collection = client.db(DB_NAME).collection(COLLECTION);

  const baseSlug = slugify(slug || title || "post");
  const finalSlug = await ensureUniqueSlug(collection, baseSlug);
  const now = new Date();

  const post = {
    title,
    excerpt,
    category,
    image: image || "",
    date: date ? new Date(date) : now,
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
