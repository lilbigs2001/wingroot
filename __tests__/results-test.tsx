import Results from "@/app/results";
import {
  DEER_RESISTANT,
  DRY,
  FULL_SHADE,
  FULL_SUN,
  MOIST,
  PARTIAL_SUN,
  SHRUB,
  TREE,
  WET,
  YOUR_CUSTOMIZED_PLANTING_LIST,
} from "@/constants";
import { StepperContext } from "@/context/StepperContext";
import { greatLakesPlantList } from "@/great-lakes-plant-list";
import { Plant, PlantFilters } from "@/types";
import { render, screen } from "@testing-library/react-native";

it(`contains ${YOUR_CUSTOMIZED_PLANTING_LIST} text`, () => {
  render(<Results />);
  expect(
    screen.getByRole("text", { name: YOUR_CUSTOMIZED_PLANTING_LIST }),
  ).toBeOnTheScreen();
});

it("filters plants based on user choice of soil type", () => {
  renderResultsPage({ soilMoisture: [MOIST, WET] });

  const drySoilPlants = greatLakesPlantList.filter(
    (plant) => !plant.soil.includes(MOIST) && !plant.soil.includes(WET),
  );
  checkThatOmittedPlantsAreNotRendered(drySoilPlants);
});

it("filters plants based on sun level", () => {
  renderResultsPage({ sunLevel: [FULL_SHADE] });

  const sunnyPlants = greatLakesPlantList.filter(
    (plant) => !plant.sun.includes(FULL_SHADE),
  );
  checkThatOmittedPlantsAreNotRendered(sunnyPlants);
});

it("filters plants based on deer resistance", () => {
  renderResultsPage({ deerThreat: true });

  const nonDeerResistantPlants = greatLakesPlantList.filter((plant) => {
    if (plant.additionalDetails)
      return !plant.additionalDetails.includes(DEER_RESISTANT);
  });
  checkThatOmittedPlantsAreNotRendered(nonDeerResistantPlants);
});

it("filters out shrubs and trees", () => {
  renderResultsPage({ shrubsAndTrees: false });

  const shrubsAndTrees = greatLakesPlantList.filter(
    (plant) => plant.form.includes(SHRUB) || plant.form.includes(TREE),
  );
  checkThatOmittedPlantsAreNotRendered(shrubsAndTrees);
});

const renderResultsPage = (context?: Partial<PlantFilters>) => {
  const defaultContext: PlantFilters = {
    soilMoisture: [DRY, MOIST, WET],
    sunLevel: [FULL_SUN, PARTIAL_SUN, FULL_SHADE],
    deerThreat: false,
    shrubsAndTrees: true,
  };

  render(
    <StepperContext.Provider
      value={{
        selections: { ...defaultContext, ...context },
        updateSelections: () => {},
      }}
    >
      <Results />
    </StepperContext.Provider>,
  );
};

const checkThatOmittedPlantsAreNotRendered = (omittedPlants: Plant[]) => {
  for (const plant of omittedPlants) {
    expect(
      screen.queryByRole("text", { name: plant.commonName }),
    ).not.toBeOnTheScreen();
  }
};
