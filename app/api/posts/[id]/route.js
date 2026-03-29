import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
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

const parseDate = (value) => {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

export async function PATCH(request, { params }) {
  const { id } = params;
  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid post id." }, { status: 400 });
  }

  const body = await request.json();
  const { title, excerpt, category, image, date, slug, content, status } =
    body || {};

  const updates = {
    updatedAt: new Date(),
  };

  if (title) updates.title = title;
  if (excerpt) updates.excerpt = excerpt;
  if (image !== undefined) updates.image = image;
  if (date) {
    const parsedDate = parseDate(date);
    if (!parsedDate) {
      return NextResponse.json({ error: "Invalid publish date." }, { status: 400 });
    }
    updates.date = parsedDate;
  }
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

  if (status !== undefined) {
    const normalizedStatus = String(status).toLowerCase();
    if (!VALID_STATUSES.has(normalizedStatus)) {
      return NextResponse.json({ error: "Invalid status." }, { status: 400 });
    }

    if (normalizedStatus === "scheduled") {
      const targetDate = updates.date || (await collection.findOne(
        { _id: new ObjectId(id) },
        { projection: { date: 1 } }
      ))?.date;

      const targetDateValue = targetDate ? new Date(targetDate) : null;
      if (!targetDateValue || Number.isNaN(targetDateValue.getTime())) {
        return NextResponse.json(
          { error: "Scheduled posts require a valid publish date." },
          { status: 400 }
        );
      }
    }

    updates.status = normalizedStatus;
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

  const updatedPost = result?.value ?? result;
  if (!updatedPost) {
    return NextResponse.json({ error: "Post not found." }, { status: 404 });
  }

  return NextResponse.json({ post: updatedPost });
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
