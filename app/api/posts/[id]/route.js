import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";

const DB_NAME = "bharatfibernet";
const COLLECTION = "posts";
const CATEGORY_COLLECTION = "categories";

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

export async function PATCH(request, { params }) {
  const { id } = params;
  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid post id." }, { status: 400 });
  }

  const body = await request.json();
  const { title, excerpt, category, image, date, slug, content } = body || {};

  const updates = {
    updatedAt: new Date(),
  };

  if (title) updates.title = title;
  if (excerpt) updates.excerpt = excerpt;
  if (image !== undefined) updates.image = image;
  if (date) updates.date = new Date(date);
  if (content !== undefined) updates.content = content;

  const client = await clientPromise;
  const db = client.db(DB_NAME);
  const collection = db.collection(COLLECTION);

  if (category !== undefined) {
    const normalizedCategory = await ensureCategoryExists(db, category);
    if (!normalizedCategory) {
      return NextResponse.json({ error: "Invalid category." }, { status: 400 });
    }
    updates.category = normalizedCategory;
  }

  if (slug) {
    const candidate = slugify(slug);
    if (candidate) {
      const existing = await collection.findOne({
        slug: candidate,
        _id: { $ne: new ObjectId(id) },
      });
      updates.slug = existing
        ? `${candidate}-${Date.now().toString(36)}`
        : candidate;
    }
  }

  const result = await collection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: updates },
    { returnDocument: "after" }
  );

  if (!result.value) {
    return NextResponse.json({ error: "Post not found." }, { status: 404 });
  }

  return NextResponse.json({ post: result.value });
}

export async function DELETE(request, { params }) {
  const { id } = params;
  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid post id." }, { status: 400 });
  }

  const client = await clientPromise;
  const collection = client.db(DB_NAME).collection(COLLECTION);

  const result = await collection.deleteOne({ _id: new ObjectId(id) });
  if (!result.deletedCount) {
    return NextResponse.json({ error: "Post not found." }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
}
