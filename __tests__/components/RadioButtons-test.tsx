import { RadioButtons } from "@/components/RadioButtons";
import { YES } from "@/constants";
import { render, screen, userEvent } from "@testing-library/react-native";

it("selecting radio button checks it", async () => {
  const user = userEvent.setup();
  render(<RadioButtons options={[YES]} />);
  const yesRadio = screen.getByRole("radio", { name: YES });
  expect(yesRadio).not.toBeChecked();
  await user.press(yesRadio);
  expect(screen.getByRole("radio", { name: YES })).toBeChecked();
});
