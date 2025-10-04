import SunPage from "@/app/(modal)/sun-page";
import { render, screen } from "@testing-library/react-native";

it("has correct text", () => {
  render(<SunPage />);
  expect(
    screen.getByRole("text", {
      name: "Does your space get full sun, partial sun, or shade?",
    }),
  ).toBeOnTheScreen();
});
