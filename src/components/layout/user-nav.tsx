"use client";

import { useRouter } from "next/navigation";

import {
  LogOut,
  Settings,
  User,
} from "lucide-react";

import { authClient } from "@/lib/auth-client";

import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type UserNavProps = Readonly<{
  name: string;
  email: string;
}>;

export function UserNav({
  name,
  email,
}: UserNavProps) {
  const router = useRouter();

  async function handleLogout() {
    await authClient.signOut();

    router.push("/login");
    router.refresh();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="outline-none">
          <Avatar className="cursor-pointer">
            <AvatarFallback>
              {name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-60"
      >
        <DropdownMenuLabel>
          <div className="flex flex-col">
            <span className="font-medium">
              {name}
            </span>

            <span className="text-xs text-muted-foreground">
              {email}
            </span>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          Profile
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={handleLogout}
          className="text-red-500"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}