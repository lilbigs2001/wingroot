/*
  - selecting checkbox checks it
  - selects multiple checkboxes
*/

import { MultiSelect } from "@/components/MultiSelect";
import { DRY, MOIST, WET } from "@/constants";
import { render, screen, userEvent } from "@testing-library/react-native";

it("renders a checkbox", () => {
  render(<MultiSelect options={[DRY]} />);
  expect(screen.getByRole("checkbox", { name: DRY })).toBeOnTheScreen();
});

it("renders multiple checkboxes", () => {
  render(<MultiSelect options={[DRY, MOIST, WET]} />);
  expect(screen.getByRole("checkbox", { name: DRY })).toBeOnTheScreen();
  expect(screen.getByRole("checkbox", { name: MOIST })).toBeOnTheScreen();
  expect(screen.getByRole("checkbox", { name: WET })).toBeOnTheScreen();
});

it("checks and unchecks checkbox when pressed", async () => {
  const user = userEvent.setup();
  render(<MultiSelect options={[DRY]} />);
  await user.press(screen.getByRole("checkbox", { name: DRY }));
  expect(screen.getByRole("checkbox", { name: DRY })).toBeChecked();
  await user.press(screen.getByRole("checkbox", { name: DRY }));
  expect(screen.getByRole("checkbox", { name: DRY })).not.toBeChecked();
});
