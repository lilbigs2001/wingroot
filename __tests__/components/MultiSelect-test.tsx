/*
  - selecting checkbox checks it
  - selects multiple checkboxes
*/

import { MultiSelect } from "@/components/MultiSelect";
import { DRY, MOIST, WET } from "@/constants";
import { render, screen, userEvent } from "@testing-library/react-native";

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

it("checks and unchecks multiple checkboxes", async () => {
  const user = userEvent.setup();
  const clickAllCheckboxes = async () => {
    await user.press(screen.getByRole("checkbox", { name: DRY }));
    await user.press(screen.getByRole("checkbox", { name: MOIST }));
    await user.press(screen.getByRole("checkbox", { name: WET }));
  };

  render(<MultiSelect options={[DRY, MOIST, WET]} />);

  await clickAllCheckboxes();
  expect(screen.getByRole("checkbox", { name: DRY })).toBeChecked();
  expect(screen.getByRole("checkbox", { name: MOIST })).toBeChecked();
  expect(screen.getByRole("checkbox", { name: WET })).toBeChecked();

  await clickAllCheckboxes();
  expect(screen.getByRole("checkbox", { name: DRY })).not.toBeChecked();
  expect(screen.getByRole("checkbox", { name: MOIST })).not.toBeChecked();
  expect(screen.getByRole("checkbox", { name: WET })).not.toBeChecked();
});
