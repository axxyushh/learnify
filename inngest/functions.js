import { inngest } from "./client";
import {STUDY_MATERIAL_TABLE, USER_TABLE} from "../configs/schema";
import {db} from "../configs/db";
import { eq } from 'drizzle-orm';
import { generateNotesAiModel } from "@/configs/AiModel";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  },
);

export const CreateNewUser = inngest.createFunction(
    {id:'create-user'},
    {event: 'user.create'},
    async({event,step}) => {
        const {user} = event.data;
        //Get Event Data
        const result = await step.run('Verify user existence and create if absent.',async() =>{
            //Check is User Alreadt Exists.
            const result = await db.select().from(USER_TABLE)
            .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress))

            //Add the User to the Database If User does'nt exists.
            if(result?.length == 0){
                const userResp = await db.insert(USER_TABLE).values({
                    name: user?.fullName,
                    email: user?.primaryEmailAddress?.emailAddress,

                }).returning({id:USER_TABLE.id})
                return userResp;
            }
            return result;
        })

        return 'Success';
    }

    //To Send Welcome Email Notifications to Users.

    //To Send Notification After somedays since when the user joined.
) 

export const GenerateNotes = inngest.createFunction(
    {id: 'generate-course'},
    {event: 'notes.generate'},
    async({event,step}) => {

        //Create Payload data
        const {course} = event.data;

        //Generate notes for Each Chapter using AI
        const noteResult = await step.run('Generate Chapter Notes',async() => {
            const Chapters = course?.courseLayout?.chapters;
            let index = 0;
            Chapters.   forEach(async(chapter) => {
                const PROMPT = 'Generate exam material detail content for each chapter , Make sure to include all topic points in very depth and detailed, also add short and important points in the content, make sure to give content in HTML format(Do not add HTMLKL,Head,Body,title tag),title should be of h2 , The chapters:'+JSON.stringify(chapter);
                const result = await generateNotesAiModel.sendMessage(PROMPT);
                const aiResp = result.response.text();

                await db.insert(CHAPTER_NOTES_TABLE).values({
                    chapterId: index,
                    course: course?.courseId,
                    notes: aiResp
                })

                index = index + 1;
            })
            return 'Completed'
        })

        //Update Status
        const UpdateCourseStatusResult = await step.run('Update Course Status to Ready',async() => {
            const result = await db.update(STUDY_MATERIAL_TABLE).set({
                status: 'Generated'
            }) .where(eq(STUDY_MATERIAL_TABLE.courseId,course?.courseId))

            return 'Success';
        });

    }
)

//To Generate flashcard, Quiz, Question Answer
// export const GenerateStudyTypeContent = inngest.createFunction(
//     {id:'Generate Study Type Content'}

// )