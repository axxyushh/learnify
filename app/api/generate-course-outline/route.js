import { courseOutlineAIModel } from "@/configs/AiModel";
import { STUDY_MATERIAL_TABLE } from "@/configs/schema";
import { db } from "@/configs/db";
import { NextResponse } from "next/server";

export async function POST(req) {

    const {courseId,topic,courseType,difficultyLevel,createdBy} = await req.json();

    const PROMPT = 'Generate a study material for '+topic+' for '+courseType+' and level of difficulty will be '+difficultyLevel+' with summary of courses, list of chapters along with summary for each chapter, Topic list in each chapter, All results in JSON format.'

    //Generate Course Layout using AI
    const aiResp = await courseOutlineAIModel.sendMessage(PROMPT);
    const aiResult = JSON.parse(aiResp.response.text());

    //Save result and User input
    const dbResult = await db.insert(STUDY_MATERIAL_TABLE).values({
        courseId: courseId,
        courseType: courseType,
        createdBy: createdBy,
        topic: topic,
        courseLayout: aiResult,
    }).returning({resp: STUDY_MATERIAL_TABLE})

    console.log(dbResult);


    return NextResponse.json({result: dbResult[0]})
    
}

// /api/generate-course-outline/route.js