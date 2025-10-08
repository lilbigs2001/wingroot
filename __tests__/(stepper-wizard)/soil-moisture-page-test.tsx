import SoilMoisturePage, {
  capitalizedSoilMoistures,
} from "@/app/(stepper-wizard)";
import { render, screen } from "@testing-library/react-native";

it(`renders soil moisture multi-select`, () => {
  render(<SoilMoisturePage />);
  expect(
    screen.getByRole("checkbox", { name: capitalizedSoilMoistures[0] }),
  ).toBeOnTheScreen();
  expect(
    screen.getByRole("checkbox", { name: capitalizedSoilMoistures[1] }),
  ).toBeOnTheScreen();
  expect(
    screen.getByRole("checkbox", { name: capitalizedSoilMoistures[2] }),
  ).toBeOnTheScreen();
});
