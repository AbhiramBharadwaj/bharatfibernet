import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { isAuthenticatedRequest, unauthorizedJson } from "@/lib/adminAuth";

const DB_NAME = "bharatfibernet";
const COLLECTION = "jobs";

export async function GET(request) {
  if (!isAuthenticatedRequest(request)) {
    return unauthorizedJson();
  }

  const client = await clientPromise;
  const collection = client.db(DB_NAME).collection(COLLECTION);
  const jobs = await collection.find({}).sort({ createdAt: -1 }).toArray();
  return NextResponse.json({ jobs });
}

export async function POST(request) {
  if (!isAuthenticatedRequest(request)) {
    return unauthorizedJson();
  }

  const body = await request.json();
  const { title, category } = body || {};

  if (!title || !category) {
    return NextResponse.json(
      { error: "title and category are required." },
      { status: 400 }
    );
  }

  const client = await clientPromise;
  const collection = client.db(DB_NAME).collection(COLLECTION);
  const now = new Date();

  const job = {
    title,
    category,
    createdAt: now,
    updatedAt: now,
  };

  const result = await collection.insertOne(job);
  return NextResponse.json(
    { job: { ...job, _id: result.insertedId } },
    { status: 201 }
  );
}
