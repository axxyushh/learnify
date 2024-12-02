import { db } from "@/configs/db";
import { CHAPTER_NOTES_TABLE, STUDY_TYPE_CONTENT_TABLE } from "@/configs/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { courseId, studyType } = await req.json();

    if (studyType === 'ALL') {
      // Fetch notes
      const notes = await db
        .select()
        .from(CHAPTER_NOTES_TABLE)
        .where(eq(CHAPTER_NOTES_TABLE.courseId, courseId));

      // Fetch study type content (Flashcard)
      const contentList = await db
        .select()
        .from(STUDY_TYPE_CONTENT_TABLE)
        .where(eq(STUDY_TYPE_CONTENT_TABLE.courseId, courseId));

      const flashcard = contentList.find((item) => item.type === 'Flashcard') || null;

      const result = {
        notes: notes || [],
        flashcard: flashcard || null,
        quiz: [],
        qa: [],
      };

      return NextResponse.json(result);
    } else if (studyType === 'notes') {
      const notes = await db
        .select()
        .from(CHAPTER_NOTES_TABLE)
        .where(eq(CHAPTER_NOTES_TABLE.courseId, courseId));

      return NextResponse.json(notes || []);
    }
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}