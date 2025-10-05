export type SoilMoisture = "dry" | "moist" | "wet";

export interface Plant {
  scientificName: string;
  commonName: string;
  bloom: Month[];
  life: Lifespan[];
  form: Form[];
  sun: SunLevel[];
  soil: SoilMoisture[];
  additionalDetails?: AdditionalDetails[];
}

type Month =
  | "Jan"
  | "Feb"
  | "Mar"
  | "Apr"
  | "May"
  | "Jun"
  | "Jul"
  | "Aug"
  | "Sep"
  | "Oct"
  | "Nov"
  | "Dec";

type Lifespan = "annual" | "biennial" | "perennial";

type Form = "forb" | "cactus" | "grass" | "sedge" | "shrub" | "tree" | "vine";

export type SunLevel = "full sun" | "partial sun" | "full shade";

type AdditionalDetails =
  | "larval host (butterfly, moth)"
  | "supports specialist bee"
  | "attracts beneficial insects"
  | "bumble bee plant"
  | "nest site"
  | "nest materials"
  | "nest thatch"
  | "deer resistant";
