// sign up schema rules for what counts as valid inputs for the form

import { z } from "zod";

// first and last name use the same rules so one helper implemented for both
const nameField = (label: string) =>
  z
    .string()
    .trim()
    .min(1, `${label} is required.`)
    .min(2, `${label} must be at least 2 characters.`)
    .max(30, `${label} can't be more than 30 characters.`);

export const signUpSchema = z
  .object({
    firstName: nameField("First name"),
    lastName: nameField("Last name"),
    email: z
      .string()
      .trim()
      .min(1, "Email is required.")
      .email("Please enter a valid email address."),
    password: z
      .string()
      .min(1, "Password is required.")
      .min(8, "Password must be at least 8 characters."),
    confirmPassword: z.string().min(1, "Please confirm your password."),
  })

  // checks to see if both passwords match and displays an error if they do not
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

// grabs the type from the schema
export type SignUpFormData = z.infer<typeof signUpSchema>;
