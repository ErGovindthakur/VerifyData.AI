import { Bell } from "lucide-react";

import { UserNav } from "./user-nav";

type DashboardNavbarProps = Readonly<{
  user: {
    name: string;
    email: string;
  };
}>;

export function DashboardNavbar({
  user,
}: DashboardNavbarProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">
      <div>
        <h1 className="text-lg font-semibold">
          VerifyData.AI
        </h1>
      </div>

      <div className="flex items-center gap-5">
        <Bell className="h-5 w-5 cursor-pointer text-muted-foreground" />

        <UserNav
          name={user.name}
          email={user.email}
        />
      </div>
    </header>
  );
}