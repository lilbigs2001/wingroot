import Results from "@/app/results";
import {
  AGASTACHE_SCROPHULARIIFOLIA,
  ALLEGHENY_SERVICEBERRY,
  AMELANCHIER_LAEVIS,
  APR,
  ASCLEPIAS_INCARNATA,
  AUG,
  BENEFICIAL_INSECTS,
  BUMBLE_BEE,
  DEER_RESISTANT,
  DRY,
  FORB,
  FULL_SHADE,
  FULL_SUN,
  JUL,
  JUN,
  LARVAL_HOST,
  MAR,
  MAY,
  MOIST,
  NEST_SITE,
  PARTIAL_SUN,
  PERENNIAL,
  PURPLE_GIANT_HYSSOP,
  SEP,
  SHRUB,
  SWAMP_MILKWEED,
  TREE,
  WET,
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
          bloom: [JUL, AUG, SEP],
          life: [PERENNIAL],
          form: [FORB],
          sun: [FULL_SUN, PARTIAL_SUN, FULL_SHADE],
          soil: [DRY, MOIST],
          additionalDetails: [BENEFICIAL_INSECTS, BUMBLE_BEE],
        },
        {
          scientificName: AMELANCHIER_LAEVIS,
          commonName: ALLEGHENY_SERVICEBERRY,
          bloom: [MAR, APR, MAY],
          life: [PERENNIAL],
          form: [TREE, SHRUB],
          sun: [FULL_SUN, PARTIAL_SUN, FULL_SHADE],
          soil: [DRY, MOIST],
          additionalDetails: [LARVAL_HOST, BENEFICIAL_INSECTS],
        },
        {
          scientificName: ASCLEPIAS_INCARNATA,
          commonName: SWAMP_MILKWEED,
          bloom: [JUN, JUL, AUG],
          life: [PERENNIAL],
          form: [FORB],
          sun: [FULL_SUN, PARTIAL_SUN],
          soil: [MOIST, WET],
          additionalDetails: [
            LARVAL_HOST,
            BENEFICIAL_INSECTS,
            BUMBLE_BEE,
            NEST_SITE,
            DEER_RESISTANT,
          ],
        },
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
