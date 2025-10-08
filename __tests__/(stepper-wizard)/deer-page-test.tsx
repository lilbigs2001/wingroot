import DeerPage from "@/app/(stepper-wizard)/deer-page";
import { NO, YES } from "@/constants";
import { render, screen } from "@testing-library/react-native";

it(`renders ${YES} and ${NO} radio buttons on DeerPage`, () => {
  render(<DeerPage />);
  expect(screen.getByRole("radio", { name: YES })).toBeOnTheScreen();
  expect(screen.getByRole("radio", { name: NO })).toBeOnTheScreen();
});
