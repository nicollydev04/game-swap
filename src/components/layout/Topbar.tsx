import { Gamepad2 } from "lucide-react";
import { Button } from "../../components/ui/button";

export function Topbar() {
  return (
    <header className="border-b">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Gamepad2 className="h-5 w-5" />
          <span className="font-semibold tracking-tight">GameSwap</span>
          <span className="ml-2 rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
            MVP
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" disabled title="Auth entra no próximo passo">
            Entrar
          </Button>
        </div>
      </div>
    </header>
  );
}
