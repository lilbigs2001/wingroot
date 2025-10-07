/*
  - selecting checkbox checks it
  - renders multiple checkboxes
  - selects multiple checkboxes
*/

import { MultiSelect } from "@/components/MultiSelect";
import { DRY } from "@/constants";
import { render, screen } from "@testing-library/react-native";

it("renders a checkbox", () => {
  render(<MultiSelect options={[DRY]} />);
  expect(screen.getByRole("checkbox", { name: DRY })).toBeOnTheScreen();
});
