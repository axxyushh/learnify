import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials:{
    url:'postgresql://neondb_owner:nfpC5lhs8aXd@ep-ancient-hill-a59v9lh7.us-east-2.aws.neon.tech/learnifyDB?sslmode=require'
  }
});