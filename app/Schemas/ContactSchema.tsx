import * as z from "zod";

export const ContactSchema = z.object({
  email: z.string().email("Please enter the valid email adress"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(500, "Message must be less than 500 characters"),
});
