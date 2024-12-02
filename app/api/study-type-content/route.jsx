// import { db } from "@/configs/db";
// import { STUDY_TYPE_CONTENT_TABLE } from "@/configs/schema";
// import { inngest } from "@/inngest/client";
// import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     const { chapters, courseId, type } = await req.json();

//     const PROMPT = 'Generate the Flashcard on topic: '+chapters+' in JSON format with front and back content, Maximum 15.';

//     // Log the prompt for debugging
//     console.log("Generated PROMPT:", PROMPT);

//     // Insert Record to DB
//     const [result] = await db.insert(STUDY_TYPE_CONTENT_TABLE).values({
//       courseId: courseId,
//       type: type,
//     }).returning({ id: STUDY_TYPE_CONTENT_TABLE.id });

//     if (!result) {
//       throw new Error("Failed to insert data into the database");
//     }

//     console.log("Inserted Record ID:", result.id);

//     // Trigger Inngest
//     await inngest.send({
//       name: 'studyType.content',
//       data: {
//         studyType: type,
//         prompt: PROMPT,
//         courseId: courseId,
//         recordId: result.id,
//       }
//     });

//     console.log("Inngest Event Triggered");

//     return NextResponse.json({ id: result.id });

//   } catch (error) {
//     console.error("Error in POST handler:", error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

import { db } from "@/configs/db";
import { STUDY_TYPE_CONTENT_TABLE } from "@/configs/schema";
import { inngest } from "@/inngest/client";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { chapters, courseId, type } = await req.json();

  // Ensure chapters is properly formatted
  if (!Array.isArray(chapters) || chapters.length === 0) {
    return NextResponse.json({ error: "No chapters provided" }, { status: 400 });
  }

  // Create the AI prompt
  const PROMPT = `Generate the Flashcard on topics: ${chapters.join(', ')} in JSON format with front and back content, Maximum 15.`;

  // Insert the initial record into the database
  const result = await db.insert(STUDY_TYPE_CONTENT_TABLE).values({
    courseId,
    type,
  }).returning({
    id: STUDY_TYPE_CONTENT_TABLE.id,
  });

  // Trigger Inngest function
  await inngest.send({
    name: 'studyType.content',
    data: {
      studyType: type,
      prompt: PROMPT,
      courseId,
      recordId: result[0].id,
    },
  });
  return NextResponse.json(result[0].id);
}
