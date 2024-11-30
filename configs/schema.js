// import { boolean, pgTable, serial, varchar, text, jsonb } from "drizzle-orm/pg-core";
import { boolean, pgTable, serial, varchar, json } from 'drizzle-orm/pg-core';

export const USER_TABLE = pgTable('users', {
  id: serial().primaryKey(),
  name: varchar().notNull(),
  email: varchar().notNull(),
  isMember: boolean().default(false),
});

export const STUDY_MATERIAL_TABLE = pgTable('studyMaterial', {
  id: serial().primaryKey(),
  courseId: varchar().notNull(),
  courseType: varchar().notNull(),
  topic: varchar().notNull(),
  difficultyLevel: varchar().default('Easy'),
  courseLayout: json(), // Use text to store JSON data as a string
  createdBy: varchar().notNull(),
  status: varchar().default('Generating'),
});

// export const STUDY_MATERIAL_TABLE = pgTable('studyMaterial', {
//   id: serial().primaryKey(),
//   courseId: varchar().notNull(),
//   courseType: varchar().notNull(),
//   topic: varchar().notNull(),
//   difficultyLevel: varchar().default('Easy'),
//   courseLayout: jsonb(),  // Store as JSONB now
//   createdBy: varchar().notNull(),
//   status: varchar().default('Generating'),
// });