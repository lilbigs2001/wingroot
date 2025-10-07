import Results from "@/app/results";
import {
  DEER_RESISTANT,
  DRY,
  FULL_SHADE,
  FULL_SUN,
  MOIST,
  PARTIAL_SUN,
  WET,
  YOUR_CUSTOMIZED_PLANTING_LIST,
} from "@/constants";
import { StepperContext } from "@/context/StepperContext";
import { greatLakesPlantList } from "@/great-lakes-plant-list";
import { render, screen } from "@testing-library/react-native";

it(`contains ${YOUR_CUSTOMIZED_PLANTING_LIST} text`, () => {
  render(<Results />);
  expect(
    screen.getByRole("text", { name: YOUR_CUSTOMIZED_PLANTING_LIST }),
  ).toBeOnTheScreen();
});

// it("displays list of all plants for the region (all soil moistures, all sun levels, no filtering based on deer, trees and shrubs welcome)", () => {
//   render(<Results />);
//   for (const plant of greatLakesPlantList) {
//     expect(
//       screen.getByRole("text", { name: plant.commonName }),
//     ).toBeOnTheScreen();
//   }
// });

it("filters plants based on user choice of soil type", () => {
  render(
    <StepperContext.Provider
      value={{
        soilMoisture: [MOIST, WET],
        sunLevel: [],
        deerThreat: false,
        shrubsAndTrees: false,
      }}
    >
      <Results />
    </StepperContext.Provider>,
  );

  const drySoilPlants = greatLakesPlantList.filter(
    (plant) => !plant.soil.includes(MOIST) && !plant.soil.includes(WET),
  );
  for (const plant of drySoilPlants) {
    expect(
      screen.queryByRole("text", { name: plant.commonName }),
    ).not.toBeOnTheScreen();
  }
});

it("filters plants based on sun level", () => {
  render(
    <StepperContext.Provider
      value={{
        soilMoisture: [DRY, MOIST, WET],
        sunLevel: [FULL_SHADE],
        deerThreat: false,
        shrubsAndTrees: false,
      }}
    >
      <Results />
    </StepperContext.Provider>,
  );

  const sunnyPlants = greatLakesPlantList.filter(
    (plant) => !plant.sun.includes(FULL_SHADE),
  );
  for (const plant of sunnyPlants) {
    expect(
      screen.queryByRole("text", { name: plant.commonName }),
    ).not.toBeOnTheScreen();
  }
});

it("filters plants based on deer resistance", () => {
  render(
    <StepperContext.Provider
      value={{
        soilMoisture: [DRY, MOIST, WET],
        sunLevel: [FULL_SUN, PARTIAL_SUN, FULL_SHADE],
        deerThreat: true,
        shrubsAndTrees: false,
      }}
    >
      <Results />
    </StepperContext.Provider>,
  );

  const nonDeerResistantPlants = greatLakesPlantList.filter((plant) => {
    if (plant.additionalDetails)
      return !plant.additionalDetails.includes(DEER_RESISTANT);
  });
  for (const plant of nonDeerResistantPlants) {
    expect(
      screen.queryByRole("text", { name: plant.commonName }),
    ).not.toBeOnTheScreen();
  }
});
