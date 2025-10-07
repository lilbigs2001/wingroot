import Results from "@/app/results";
import { YOUR_CUSTOMIZED_PLANTING_LIST } from "@/constants";
import { greatLakesPlantList } from "@/great-lakes-plant-list";
import { render, screen } from "@testing-library/react-native";

it(`contains ${YOUR_CUSTOMIZED_PLANTING_LIST} text`, () => {
  render(<Results />);
  expect(
    screen.getByRole("text", { name: YOUR_CUSTOMIZED_PLANTING_LIST }),
  ).toBeOnTheScreen();
});

it("displays list of plants for the region", () => {
  render(<Results />);
  for (const plant of greatLakesPlantList) {
    expect(
      screen.getByRole("text", { name: plant.commonName }),
    ).toBeOnTheScreen();
  }
});
