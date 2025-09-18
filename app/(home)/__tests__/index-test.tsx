import { render, screen } from "@testing-library/react-native";
import IndexScreen from "..";

it("renders the app name", () => {
  render(<IndexScreen />);
  expect(screen.getByRole("text", { name: "Wingroot" })).toBeOnTheScreen();
});

it("displays the app icon", () => {
  render(<IndexScreen />);
  const appIcon = screen.getByLabelText("Wingroot logo");
  expect(appIcon).toBeOnTheScreen();
});
