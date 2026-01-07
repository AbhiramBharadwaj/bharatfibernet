import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";

const DB_NAME = "bharatfibernet";
const COLLECTION = "jobs";

export async function PATCH(request, { params }) {
  const { id } = params;
  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid job id." }, { status: 400 });
  }

  const body = await request.json();
  const { title, category } = body || {};

  const updates = { updatedAt: new Date() };
  if (title) updates.title = title;
  if (category) updates.category = category;

  const client = await clientPromise;
  const collection = client.db(DB_NAME).collection(COLLECTION);

  const result = await collection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: updates },
    { returnDocument: "after" }
  );

  if (!result.value) {
    return NextResponse.json({ error: "Job not found." }, { status: 404 });
  }

  return NextResponse.json({ job: result.value });
}

export async function DELETE(request, { params }) {
  const { id } = params;
  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid job id." }, { status: 400 });
  }

  const client = await clientPromise;
  const collection = client.db(DB_NAME).collection(COLLECTION);

  const result = await collection.deleteOne({ _id: new ObjectId(id) });
  if (!result.deletedCount) {
    return NextResponse.json({ error: "Job not found." }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
}
