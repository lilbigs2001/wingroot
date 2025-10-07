import { PlantFilters } from "@/types";
import { createContext } from "react";

export const StepperContext = createContext<PlantFilters>({
  soilMoisture: [],
  sunLevel: [],
  deerThreat: false,
  shrubsAndTrees: true,
});
