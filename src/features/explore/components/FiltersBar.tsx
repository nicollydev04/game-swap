import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { ExploreFilters } from "../types/explore.types";
import { DISTANCE_OPTIONS, PLATFORM_OPTIONS } from "../hooks/useExploreFilters";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function FiltersBar({
  filters,
  onChange,
  onReset,
}: {
  filters: ExploreFilters;
  onChange: (patch: Partial<ExploreFilters>) => void;
  onReset: () => void;
}) {
  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-12">
        <div className="sm:col-span-4">
          <Input
            value={filters.q}
            onChange={(e) => onChange({ q: e.target.value })}
            placeholder="Buscar (ex.: God of War, PS5...)"
          />
        </div>

        <div className="sm:col-span-2">
          <Select
            value={filters.platform}
            onValueChange={(v) => onChange({ platform: v as ExploreFilters["platform"] })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Plataforma" />
            </SelectTrigger>
            <SelectContent>
              {PLATFORM_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="sm:col-span-2">
          <Input
            value={filters.city}
            onChange={(e) => onChange({ city: e.target.value })}
            placeholder="Cidade"
          />
        </div>

        <div className="sm:col-span-2">
          <Input
            value={filters.neighborhood}
            onChange={(e) => onChange({ neighborhood: e.target.value })}
            placeholder="Bairro"
          />
        </div>

        <div className="sm:col-span-2">
          <Select
            value={String(filters.maxDistanceKm)}
            onValueChange={(v) =>
              onChange({ maxDistanceKm: v === "ANY" ? "ANY" : Number(v) })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Distância" />
            </SelectTrigger>
            <SelectContent>
              {DISTANCE_OPTIONS.map((opt) => (
                <SelectItem key={String(opt.value)} value={String(opt.value)}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-3 flex justify-end">
        <Button variant="ghost" size="sm" onClick={onReset}>
          <X className="mr-2 h-4 w-4" />
          Limpar
        </Button>
      </div>
    </div>
  );
}
