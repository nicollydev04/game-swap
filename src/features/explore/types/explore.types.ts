export type Platform = "PS5" | "PS4" | "XBOX" | "SWITCH";

export type Condition = "Novo" | "Ótimo" | "Bom" | "Usado";

export type Listing = {
  id: string;
  title: string;
  platform: Platform;
  condition: Condition;
  city: string;
  neighborhood: string;
  distanceKm: number; // aprox
  coverUrl?: string;
  owner: {
    username: string;
    rating: number; // 0..5
    trades: number;
  };
};

export type ExploreFilters = {
  q: string;
  platform: Platform | "ALL";
  city: string;
  neighborhood: string;
  maxDistanceKm: number | "ANY";
};
