import { RadioButtons } from "@/components/RadioButtons";
import { YES } from "@/constants";
import { render, screen, userEvent } from "@testing-library/react-native";

/*
  - Selecting selected button does not unselect it
  - Renders multiple buttons
  - Only selects one button at a time
*/

it("selecting radio button checks it", async () => {
  const user = userEvent.setup();
  render(<RadioButtons options={[YES]} />);
  const yesRadio = screen.getByRole("radio", { name: YES });
  expect(yesRadio).not.toBeChecked();
  await user.press(yesRadio);
  expect(screen.getByRole("radio", { name: YES })).toBeChecked();
});

it("does not unselect selected button if re-pressed", async () => {
  const user = userEvent.setup();
  render(<RadioButtons options={[YES]} />);

  await user.press(screen.getByRole("radio", { name: YES }));
  const yesRadio = screen.getByRole("radio", { name: YES });
  expect(yesRadio).toBeChecked();
  await user.press(yesRadio);
  expect(screen.getByRole("radio", { name: YES })).toBeChecked();
});
