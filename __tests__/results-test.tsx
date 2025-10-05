import Results from "@/app/results";
import {
  AGASTACHE_SCROPHULARIIFOLIA,
  ALLEGHENY_SERVICEBERRY,
  AMELANCHIER_LAEVIS,
  ASCLEPIAS_INCARNATA,
  PURPLE_GIANT_HYSSOP,
  SWAMP_MILKWEED,
  YOUR_CUSTOMIZED_PLANTING_LIST,
} from "@/constants";
import { PlantingsContext } from "@/context/PlantingsContext";
import { render, screen } from "@testing-library/react-native";

it(`contains ${YOUR_CUSTOMIZED_PLANTING_LIST} text`, () => {
  render(
    <PlantingsContext.Provider value={[]}>
      <Results />
    </PlantingsContext.Provider>,
  );
  expect(
    screen.getByRole("text", { name: YOUR_CUSTOMIZED_PLANTING_LIST }),
  ).toBeOnTheScreen();
});

it("displays list of plants in state", () => {
  render(
    <PlantingsContext.Provider
      value={[
        {
          scientificName: AGASTACHE_SCROPHULARIIFOLIA,
          commonName: PURPLE_GIANT_HYSSOP,
        },
        {
          scientificName: AMELANCHIER_LAEVIS,
          commonName: ALLEGHENY_SERVICEBERRY,
        },
        { scientificName: ASCLEPIAS_INCARNATA, commonName: SWAMP_MILKWEED },
      ]}
    >
      <Results />
    </PlantingsContext.Provider>,
  );
  expect(
    screen.getByRole("text", { name: PURPLE_GIANT_HYSSOP }),
  ).toBeOnTheScreen();
  expect(
    screen.getByRole("text", { name: ALLEGHENY_SERVICEBERRY }),
  ).toBeOnTheScreen();
  expect(screen.getByRole("text", { name: SWAMP_MILKWEED })).toBeOnTheScreen();
});
