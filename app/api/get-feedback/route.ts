import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "No ID provided" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();

    const data = await db.collection("feedback").findOne({ _id: new ObjectId(id) });

    if (data) {
      return NextResponse.json({ data });
    } else {
      return NextResponse.json({ error: "No data found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error fetching data from MongoDB:", error);
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}
