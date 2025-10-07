import SunPage from "@/app/(stepper-wizard)/sun-page";
import { FULL_SHADE, FULL_SUN, PARTIAL_SUN } from "@/constants";
import { render, screen } from "@testing-library/react-native";

it("renders sun level multi-select", () => {
  render(<SunPage />);
  expect(screen.getByRole("checkbox", { name: FULL_SUN })).toBeOnTheScreen();
  expect(screen.getByRole("checkbox", { name: PARTIAL_SUN })).toBeOnTheScreen();
  expect(screen.getByRole("checkbox", { name: FULL_SHADE })).toBeOnTheScreen();
});
