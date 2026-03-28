import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

const DB_NAME = "bharatfibernet";
const CATEGORY_COLLECTION = "categories";
const POSTS_COLLECTION = "posts";

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

export async function DELETE(_request, { params }) {
  const rawSlug = String(params?.slug || "").trim();
  const slug = slugify(rawSlug);

  if (!slug) {
    return NextResponse.json(
      { error: "Invalid category slug." },
      { status: 400 }
    );
  }

  const client = await clientPromise;
  const db = client.db(DB_NAME);
  const categories = db.collection(CATEGORY_COLLECTION);
  const posts = db.collection(POSTS_COLLECTION);

  const category = await categories.findOne({ slug });
  if (!category) {
    return NextResponse.json({ error: "Category not found." }, { status: 404 });
  }

  const normalizedName = normalizeCategoryName(category.name);
  const postsUsingCategory = await posts.countDocuments({
    category: normalizedName,
  });

  if (postsUsingCategory > 0) {
    return NextResponse.json(
      {
        error: `Cannot delete category. ${postsUsingCategory} post(s) are using it.`,
      },
      { status: 409 }
    );
  }

  await categories.deleteOne({ _id: category._id });
  return NextResponse.json({ ok: true });
}
