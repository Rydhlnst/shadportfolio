import { z } from "zod"

const sectionValues = [
  "about",   // Tentang diri saya
  "project", // Tentang projek saya
  "resume",  // Resume/CV saya
  "contact", // Cara kontak saya
] as const

export const AIAnswerSchema = z.object({
  question: z
    .string()
    .min(5, { message: "Question is required" })
    .max(130, { message: "Question cannot exceed 130 characters" }),
  content: z
    .string()
    .min(30, { message: "Content/context must be at least 30 characters" }),
  language: z.enum(["id", "en"], {
    errorMap: (issue) => {
      if (issue.code === "invalid_enum_value") {
        return { message: "Please select a valid language" }
      }
      return { message: "Invalid value" }
    },
  }),
  section: z.enum(sectionValues, {
    errorMap: () => ({ message: "Please select a valid chatbot section" }),
  }),
})
