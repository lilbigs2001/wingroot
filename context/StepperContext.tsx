import { PlantFilters } from "@/types";
import { createContext, ReactNode, useState } from "react";

const defaultSelections: PlantFilters = {
  soilMoisture: [],
  sunLevel: [],
  deerThreat: false,
  shrubsAndTrees: true,
};

export const StepperContext = createContext<{
  selections: PlantFilters;
  updateSelections: (updates: Partial<PlantFilters>) => void;
}>({
  selections: defaultSelections,
  updateSelections: () => {},
});

export const StepperWizardProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [selections, setSelections] = useState<PlantFilters>(defaultSelections);

  const updateSelections = (updates: Partial<PlantFilters>) => {
    setSelections((prev) => ({ ...prev, ...updates }));
  };

  return (
    <StepperContext.Provider value={{ selections, updateSelections }}>
      {children}
    </StepperContext.Provider>
  );
};
