import { serve } from "inngest/next";
import { inngest } from "@/inngest/client.js";
import { CreateNewUser, GenerateNotes, helloWorld } from "@/inngest/functions";

// API configuration to serve Inngest functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    helloWorld,
    CreateNewUser,
    GenerateNotes,
  ],
});


// ../../../inngest/client.js