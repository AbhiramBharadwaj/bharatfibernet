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

  if (!normalized || !slug) return "";

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

export async function POST(request) {
  const body = await request.json();
  const ids = Array.isArray(body?.ids) ? body.ids : [];
  const action = String(body?.action || "");
  const status = body?.status;
  const category = body?.category;
  const publishDate = body?.publishDate;

  const objectIds = ids.filter(ObjectId.isValid).map((id) => new ObjectId(id));
  if (!objectIds.length) {
    return NextResponse.json({ error: "No valid post ids provided." }, { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db(DB_NAME);
  const collection = db.collection(COLLECTION);

  if (action === "delete") {
    const result = await collection.deleteMany({ _id: { $in: objectIds } });
    return NextResponse.json({ ok: true, matched: result.deletedCount || 0 });
  }

  if (action === "setStatus") {
    const normalizedStatus = String(status || "").toLowerCase();
    if (!VALID_STATUSES.has(normalizedStatus)) {
      return NextResponse.json({ error: "Invalid status." }, { status: 400 });
    }

    const updates = { status: normalizedStatus, updatedAt: new Date() };
    if (normalizedStatus === "scheduled") {
      if (!publishDate) {
        return NextResponse.json(
          { error: "Scheduled status requires publishDate." },
          { status: 400 }
        );
      }
      const parsed = new Date(publishDate);
      if (Number.isNaN(parsed.getTime())) {
        return NextResponse.json({ error: "Invalid publishDate." }, { status: 400 });
      }
      updates.date = parsed;
    }

    const result = await collection.updateMany(
      { _id: { $in: objectIds } },
      { $set: updates }
    );
    return NextResponse.json({ ok: true, matched: result.modifiedCount || 0 });
  }

  if (action === "setCategory") {
    const normalizedCategory = await ensureCategoryExists(db, category);
    if (!normalizedCategory) {
      return NextResponse.json({ error: "Invalid category." }, { status: 400 });
    }
    const result = await collection.updateMany(
      { _id: { $in: objectIds } },
      { $set: { category: normalizedCategory, updatedAt: new Date() } }
    );
    return NextResponse.json({ ok: true, matched: result.modifiedCount || 0 });
  }

  return NextResponse.json({ error: "Unsupported action." }, { status: 400 });
}
