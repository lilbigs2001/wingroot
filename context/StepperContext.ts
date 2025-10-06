import { SoilMoisture, SunLevel } from "@/types";
import { createContext } from "react";

export const StepperContext = createContext<{
  soilMoisture: SoilMoisture[];
  sunLevel: SunLevel[];
  deerThreat: boolean;
  shrubsAndTrees: boolean;
}>({
  soilMoisture: [],
  sunLevel: [],
  deerThreat: false,
  shrubsAndTrees: true,
});
