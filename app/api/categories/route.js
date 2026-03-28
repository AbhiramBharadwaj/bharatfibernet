import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

const DB_NAME = "bharatfibernet";
const COLLECTION = "categories";
const DEFAULT_CATEGORIES = [
  "Articles",
  "Case Studies",
  "Multimedia",
  "White Papers",
];

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

const getCollection = async () => {
  const client = await clientPromise;
  return client.db(DB_NAME).collection(COLLECTION);
};

const seedDefaultsIfNeeded = async (collection) => {
  const existingCount = await collection.countDocuments();
  if (existingCount > 0) {
    return;
  }

  const now = new Date();
  await collection.insertMany(
    DEFAULT_CATEGORIES.map((name) => ({
      name,
      slug: slugify(name),
      createdAt: now,
      updatedAt: now,
    }))
  );
};

export async function GET() {
  const collection = await getCollection();
  await seedDefaultsIfNeeded(collection);

  const categories = await collection
    .find({})
    .sort({ name: 1 })
    .project({ name: 1, slug: 1 })
    .toArray();

  return NextResponse.json({
    categories: categories.map((item) => ({
      _id: item._id,
      name: item.name,
      slug: item.slug,
    })),
  });
}

export async function POST(request) {
  const body = await request.json();
  const normalizedName = normalizeCategoryName(body?.name);

  if (!normalizedName) {
    return NextResponse.json(
      { error: "Category name is required." },
      { status: 400 }
    );
  }

  const slug = slugify(normalizedName);
  if (!slug) {
    return NextResponse.json(
      { error: "Category name is invalid." },
      { status: 400 }
    );
  }

  const collection = await getCollection();
  const now = new Date();

  const result = await collection.findOneAndUpdate(
    { slug },
    {
      $set: { name: normalizedName, updatedAt: now },
      $setOnInsert: { createdAt: now },
    },
    {
      upsert: true,
      returnDocument: "after",
    }
  );

  const category = result?.value ?? result;

  return NextResponse.json({
    category: {
      _id: category?._id,
      name: category?.name || normalizedName,
      slug: category?.slug || slug,
    },
  });
}
