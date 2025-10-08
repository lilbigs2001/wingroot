import SoilMoisturePage from "@/app/(stepper-wizard)";
import { DRY, MOIST, WET } from "@/constants";
import { render, screen } from "@testing-library/react-native";

it(`renders soil moisture multi-select`, () => {
  render(<SoilMoisturePage />);
  expect(screen.getByRole("checkbox", { name: DRY })).toBeOnTheScreen();
  expect(screen.getByRole("checkbox", { name: MOIST })).toBeOnTheScreen();
  expect(screen.getByRole("checkbox", { name: WET })).toBeOnTheScreen();
});
