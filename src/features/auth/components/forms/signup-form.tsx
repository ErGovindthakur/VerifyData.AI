"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { FormField } from "@/components/form/form-field";

import { authClient } from "@/lib/auth-client";

import {
  signupSchema,
  type SignupInput,
} from "@/features/auth/auth.schema";

import { AuthCard } from "../ui/auth-card";
import { AuthHeader } from "../ui/auth-header";
import { SocialLogin } from "../ui/social-login";

export function SignupForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),

    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(data: SignupInput) {
    const { error } = await authClient.signUp.email(
      {
        name: data.name,
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: () => {
          router.push("/dashboard");
        },
      }
    );

    if (error) {
      console.error(error);
    }
  }

  return (
    <AuthCard>
      <div className="space-y-8">
        <AuthHeader
          title="Create Account"
          description="Start using VerifyData.AI today."
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <FormField
            id="name"
            label="Full Name"
            placeholder="Govind Kumar"
            error={errors.name?.message}
            {...register("name")}
          />

          <FormField
            id="email"
            label="Email"
            type="email"
            placeholder="govind@example.com"
            error={errors.email?.message}
            {...register("email")}
          />

          <FormField
            id="password"
            label="Password"
            type="password"
            placeholder="••••••••"
            error={errors.password?.message}
            {...register("password")}
          />

          <FormField
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            placeholder="••••••••"
            error={errors.confirmPassword?.message}
            {...register("confirmPassword")}
          />

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Creating Account..."
              : "Create Account"}
          </Button>
        </form>

        <SocialLogin />

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-primary hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </AuthCard>
  );
}