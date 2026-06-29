"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function SocialLogin() {
  async function signInWithGoogle() {
  await authClient.signIn.social({
    provider: "google",
    callbackURL: "/dashboard",
  });
}
  return (
    <div className="space-y-6">
      <div className="relative">
        <Separator />

        <span className="bg-background text-muted-foreground absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 text-xs">
          OR CONTINUE WITH
        </span>
      </div>

      <div className="grid gap-3">
        <Button variant="outline" type="button" onClick={() => void signInWithGoogle()}>
          <FcGoogle className="mr-2 h-5 w-5" />
          Continue with Google
        </Button>

        <Button variant="outline" type="button">
          <FaGithub className="mr-2 h-5 w-5" />
          Continue with GitHub
        </Button>
      </div>
    </div>
  );
}
