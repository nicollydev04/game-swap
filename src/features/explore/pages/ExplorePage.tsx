import { EmptyState } from "@/components/common/EmptyState";
import { PageHeader } from "@/components/common/PageHeader";
import { FiltersBar } from "../components/FiltersBar";
import { ListingCard } from "../components/ListingCard";
import type { Listing } from "../types/explore.types";
import { useExploreFilters } from "../hooks/useExploreFilters";

const MOCK_LISTINGS: Listing[] = [
  {
    id: "1",
    title: "God of War Ragnarök",
    platform: "PS5",
    condition: "Ótimo",
    city: "Rio de Janeiro",
    neighborhood: "Barra da Tijuca",
    distanceKm: 6,
    owner: { username: "nic", rating: 4.8, trades: 12 },
  },
  {
    id: "2",
    title: "The Last of Us Part II",
    platform: "PS4",
    condition: "Bom",
    city: "Rio de Janeiro",
    neighborhood: "Recreio",
    distanceKm: 12,
    owner: { username: "vitoria", rating: 4.9, trades: 20 },
  },
  {
    id: "3",
    title: "Zelda: Breath of the Wild",
    platform: "SWITCH",
    condition: "Ótimo",
    city: "Niterói",
    neighborhood: "Icaraí",
    distanceKm: 25,
    owner: { username: "mari", rating: 4.6, trades: 7 },
  },
  {
    id: "4",
    title: "Halo Infinite",
    platform: "XBOX",
    condition: "Usado",
    city: "Rio de Janeiro",
    neighborhood: "Centro",
    distanceKm: 9,
    owner: { username: "bruno", rating: 4.2, trades: 5 },
  },
];

export function ExplorePage() {
  const { filters, setFilters, filtered, reset } = useExploreFilters(MOCK_LISTINGS);

  return (
    <div className="space-y-4">
      <PageHeader
        title="Explorar"
        subtitle="Encontre jogos perto de você e proponha trocas com segurança."
      />

      <FiltersBar
        filters={filters}
        onChange={(patch) => setFilters((prev) => ({ ...prev, ...patch }))}
        onReset={reset}
      />

      {filtered.length === 0 ? (
        <EmptyState
          title="Nada por aqui"
          description="Tente ajustar os filtros para encontrar jogos disponíveis."
          onReset={reset}
        />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((l) => (
            <ListingCard key={l.id} listing={l} />
          ))}
        </div>
      )}
    </div>
  );
}
