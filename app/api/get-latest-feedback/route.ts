import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();

    const data = await db
      .collection("feedback")
      .findOne({}, { sort: { _id: -1 } });

    if (data) {
      return NextResponse.json({ data });
    } else {
      return NextResponse.json({ error: "No data found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error fetching data from MongoDB:", error);
    return NextResponse.json(
      { error: "Error fetching data" },
      { status: 500 }
    );
  }
}
