import SoilMoisturePage from "@/app/(stepper-wizard)";
import { NO, YES } from "@/constants";
import { render, screen } from "@testing-library/react-native";

it(`renders ${YES} and ${NO} radio buttons`, () => {
  render(<SoilMoisturePage />);
  expect(screen.getByRole("radio", { name: YES })).toBeOnTheScreen();
  expect(screen.getByRole("radio", { name: NO })).toBeOnTheScreen();
});
