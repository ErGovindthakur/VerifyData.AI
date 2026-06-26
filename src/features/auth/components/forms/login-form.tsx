"use client";

import Link from "next/link";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";

import { FormField } from "@/components/form/form-field";

import {
  loginSchema,
  type LoginInput,
} from "@/features/auth/auth.schema";

import { AuthCard } from "../ui/auth-card";
import { AuthHeader } from "../ui/auth-header";
import { SocialLogin } from "../ui/social-login";

import { useRouter } from "next/navigation";

import { authClient } from "@/lib/auth-client";

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  async function onSubmit(data: LoginInput) {
  const result = await authClient.signIn.email({
    email: data.email,
    password: data.password,
  });

  if (result.error) {
    console.error(result.error);
    return;
  }

  router.push("/dashboard");
  router.refresh();
}

  return (
    <AuthCard>
      <div className="space-y-8">
        <AuthHeader
          title="Welcome Back"
          description="Sign in to continue to VerifyData.AI"
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <FormField
            id="email"
            label="Email"
            type="email"
            placeholder="john@example.com"
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

          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Forgot Password?
            </Link>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing In..." : "Sign In"}
          </Button>
        </form>

        <SocialLogin />

        <p className="text-center text-sm text-muted-foreground">
          Don not have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-primary hover:underline"
          >
            Create one
          </Link>
        </p>
      </div>
    </AuthCard>
  );
}