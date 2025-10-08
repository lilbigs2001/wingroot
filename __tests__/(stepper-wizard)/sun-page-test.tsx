import SunPage, { capitalizedSunLevels } from "@/app/(stepper-wizard)/sun-page";
import { render, screen } from "@testing-library/react-native";

it("renders sun level multi-select", () => {
  render(<SunPage />);
  expect(
    screen.getByRole("checkbox", { name: capitalizedSunLevels[0] }),
  ).toBeOnTheScreen();
  expect(
    screen.getByRole("checkbox", { name: capitalizedSunLevels[1] }),
  ).toBeOnTheScreen();
  expect(
    screen.getByRole("checkbox", { name: capitalizedSunLevels[2] }),
  ).toBeOnTheScreen();
});
