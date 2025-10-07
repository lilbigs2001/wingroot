import { RadioButtons } from "@/components/RadioButtons";
import { NO, YES } from "@/constants";
import { render, screen, userEvent } from "@testing-library/react-native";

/*
  - Includes a visible indicator of selection
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

it("renders multiple buttons", () => {
  const MAYBE = "Maybe";
  render(<RadioButtons options={[YES, NO, MAYBE]} />);
  expect(screen.getByRole("radio", { name: YES })).toBeOnTheScreen();
  expect(screen.getByRole("radio", { name: NO })).toBeOnTheScreen();
  expect(screen.getByRole("radio", { name: MAYBE })).toBeOnTheScreen();
});

it("only selects one button at a time", async () => {
  const user = userEvent.setup();
  render(<RadioButtons options={[YES, NO]} />);

  await user.press(screen.getByRole("radio", { name: YES }));
  expect(screen.getByRole("radio", { name: YES })).toBeChecked();
  expect(screen.getByRole("radio", { name: NO })).not.toBeChecked();

  await user.press(screen.getByRole("radio", { name: NO }));
  expect(screen.getByRole("radio", { name: NO })).toBeChecked();
  expect(screen.getByRole("radio", { name: YES })).not.toBeChecked();
});
