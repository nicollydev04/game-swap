import { useMemo, useState } from "react";
import type { ExploreFilters, Listing, Platform } from "../types/explore.types";

const DEFAULT_FILTERS: ExploreFilters = {
  q: "",
  platform: "ALL",
  city: "",
  neighborhood: "",
  maxDistanceKm: 10,
};

function normalize(s: string) {
  return s.trim().toLowerCase();
}

export function useExploreFilters(listings: Listing[]) {
  const [filters, setFilters] = useState<ExploreFilters>(DEFAULT_FILTERS);

  const filtered = useMemo(() => {
    const q = normalize(filters.q);
    const city = normalize(filters.city);
    const neighborhood = normalize(filters.neighborhood);

    return listings.filter((l) => {
      if (filters.platform !== "ALL" && l.platform !== filters.platform) return false;

      if (city && normalize(l.city) !== city) return false;

      if (neighborhood && !normalize(l.neighborhood).includes(neighborhood)) return false;

      if (filters.maxDistanceKm !== "ANY" && l.distanceKm > filters.maxDistanceKm) return false;

      if (q) {
        const hay = normalize(`${l.title} ${l.platform} ${l.condition}`);
        if (!hay.includes(q)) return false;
      }

      return true;
    });
  }, [filters, listings]);

  function reset() {
    setFilters(DEFAULT_FILTERS);
  }

  return { filters, setFilters, filtered, reset };
}

export const PLATFORM_OPTIONS: { label: string; value: Platform | "ALL" }[] = [
  { label: "Todas", value: "ALL" },
  { label: "PS5", value: "PS5" },
  { label: "PS4", value: "PS4" },
  { label: "Xbox", value: "XBOX" },
  { label: "Switch", value: "SWITCH" },
];

export const DISTANCE_OPTIONS: { label: string; value: number | "ANY" }[] = [
  { label: "Até 5 km", value: 5 },
  { label: "Até 10 km", value: 10 },
  { label: "Até 25 km", value: 25 },
  { label: "Qualquer distância", value: "ANY" },
];
