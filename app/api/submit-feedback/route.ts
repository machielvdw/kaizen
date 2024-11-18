import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection("feedback");

    const data = await req.json();

    const result = await collection.insertOne(data);

    return NextResponse.json({ success: true, insertedId: result.insertedId });
  } catch (error) {
    console.error("Error saving data to MongoDB:", error);
    return NextResponse.json(
      { success: false, error: "Error saving data" },
      { status: 500 }
    );
  }
}
