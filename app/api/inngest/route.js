// /pages/api/inngest.js
import { serve } from "inngest/next";
import { inngest } from "@/inngest/client.js";
import { CreateNewUser, GenerateNotes, helloWorld } from "@/inngest/functions";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    helloWorld,
    CreateNewUser,
    GenerateNotes,
  ],
});