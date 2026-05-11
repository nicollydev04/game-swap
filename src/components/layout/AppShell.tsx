import { Outlet } from "react-router-dom";
import { Topbar } from "./Topbar";

export function AppShell() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Topbar />
      <main className="mx-auto w-full max-w-6xl px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
