import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .email("Please enter a valid email address.")
    .trim(),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(100, "Password is too long."),
});

export type LoginInput = z.infer<typeof loginSchema>;

//////////////////////////////////////////////////////

export const signupSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Name must contain at least 2 characters.")
      .max(100),

    email: z
      .email("Please enter a valid email address.")
      .trim(),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters.")
      .max(100),

    confirmPassword: z.string(),
  })
  .refine((values) => values.password === values.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match.",
  });

export type SignupInput = z.infer<typeof signupSchema>;

//////////////////////////////////////////////////////

export const forgotPasswordSchema = z.object({
  email: z
    .email("Please enter a valid email address.")
    .trim(),
});

export type ForgotPasswordInput = z.infer<
  typeof forgotPasswordSchema
>;

//////////////////////////////////////////////////////

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters.")
      .max(100),

    confirmPassword: z.string(),
  })
  .refine((values) => values.password === values.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match.",
  });

export type ResetPasswordInput = z.infer<
  typeof resetPasswordSchema
>;