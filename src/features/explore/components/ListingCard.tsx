import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Listing } from "../types/explore.types";
import { MapPin, Star } from "lucide-react";

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="space-y-2">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-base leading-tight">{listing.title}</CardTitle>
          <Badge variant="secondary">{listing.platform}</Badge>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Badge>{listing.condition}</Badge>
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            {listing.neighborhood} • {listing.city} • ~{listing.distanceKm} km
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="font-medium text-foreground">{listing.owner.username}</span>
          <span className="inline-flex items-center gap-1">
            <Star className="h-3.5 w-3.5" />
            {listing.owner.rating.toFixed(1)}
          </span>
          <span>• {listing.owner.trades} trocas</span>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground">
          Disponível para troca. Combine em local público e confirme o estado do jogo no encontro.
        </p>
      </CardContent>

      <CardFooter className="flex items-center justify-between gap-2">
        <Button variant="secondary" className="w-full" disabled title="Fluxo de proposta entra no próximo passo">
          Propor troca
        </Button>
      </CardFooter>
    </Card>
  );
}
