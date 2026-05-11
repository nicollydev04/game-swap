import { Button } from "@/components/ui/button";

export function EmptyState({
  title,
  description,
  onReset,
}: {
  title: string;
  description: string;
  onReset?: () => void;
}) {
  return (
    <div className="rounded-lg border bg-card p-8 text-center">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      {onReset ? (
        <div className="mt-4">
          <Button variant="secondary" onClick={onReset}>
            Limpar filtros
          </Button>
        </div>
      ) : null}
    </div>
  );
}
