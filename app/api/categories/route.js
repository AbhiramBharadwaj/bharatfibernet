import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

const DB_NAME = "bharatfibernet";
const COLLECTION = "categories";

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

export async function GET() {
  const collection = await getCollection();

  const categories = await collection
    .find({})
    .sort({ name: 1 })
    .project({ name: 1, slug: 1 })
    .toArray();

  const uniqueCategories = Array.from(
    new Map(
      categories.map((item) => [
        item.slug || slugify(item.name),
        {
          _id: item._id,
          name: normalizeCategoryName(item.name),
          slug: item.slug || slugify(item.name),
        },
      ])
    ).values()
  ).filter((item) => item.name && item.slug);

  uniqueCategories.sort((a, b) => a.name.localeCompare(b.name));

  return NextResponse.json({
    categories: uniqueCategories,
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
