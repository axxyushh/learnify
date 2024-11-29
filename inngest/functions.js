import { inngest } from "./client";
import {USER_TABLE} from "../configs/schema";
import {db} from "../configs/db";
import { eq } from 'drizzle-orm';

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