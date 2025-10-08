import { MultiSelect } from "@/components/MultiSelect";
import { DRY, MOIST, WET } from "@/constants";
import { render, screen } from "@testing-library/react-native";

it("renders multiple checkboxes", () => {
  render(
    <MultiSelect
      checkedState={[]}
      setCheckedState={() => {}}
      options={[DRY, MOIST, WET]}
    />,
  );
  expect(screen.getByRole("checkbox", { name: DRY })).toBeOnTheScreen();
  expect(screen.getByRole("checkbox", { name: MOIST })).toBeOnTheScreen();
  expect(screen.getByRole("checkbox", { name: WET })).toBeOnTheScreen();
});
