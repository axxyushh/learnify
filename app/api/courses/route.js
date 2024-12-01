// import { db } from "@/configs/db";
// import { STUDY_MATERIAL_TABLE } from "@/configs/schema";
// import { eq } from "drizzle-orm";
// import { NextResponse } from "next/server";

// export async function POST(req) {

//     const {createdBy} = await req.json();
//     const result = await db.select().from(STUDY_MATERIAL_TABLE)
//     .where(eq(STUDY_MATERIAL_TABLE.createdBy, createdBy))
//     .orderBy(desc(STUDY_MATERIAL_TABLE.id));

//     return NextResponse.json({result: result});

// }

import { db } from "@/configs/db";
import { STUDY_MATERIAL_TABLE } from "@/configs/schema";
import { eq, desc } from "drizzle-orm"; // Import `desc`
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Parse the request body
    const body = await req.json();
    const { createdBy } = body;

    // Ensure `createdBy` is provided
    if (!createdBy) {
      return NextResponse.json(
        { error: "createdBy is required" },
        { status: 400 }
      );
    }

    // Fetch data from the database
    const result = await db
      .select()
      .from(STUDY_MATERIAL_TABLE)
      .where(eq(STUDY_MATERIAL_TABLE.createdBy, createdBy))
      .orderBy(desc(STUDY_MATERIAL_TABLE.id));

    // Return the result
    return NextResponse.json({ result });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

export async function GET(req) {

  const reqUrl = req.url;
  const {searchParams} = new URL(reqUrl);
  const courseId = searchParams?.get('courseId');
  const course = await db.select().from(STUDY_MATERIAL_TABLE).where(eq(STUDY_MATERIAL_TABLE?.courseId, courseId));

  return NextResponse.json({result: course[0]});

}