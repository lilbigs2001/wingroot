import { RadioButtons } from "@/components/RadioButtons";
import { NO, YES } from "@/constants";
import { render, screen, userEvent } from "@testing-library/react-native";
import { useState } from "react";

it("selecting radio button checks it", async () => {
  const user = userEvent.setup();
  render(<StatefulRadioWrapper options={[YES]} />);
  const yesRadio = screen.getByRole("radio", { name: YES });
  expect(yesRadio).not.toBeSelected();
  await user.press(yesRadio);
  expect(screen.getByRole("radio", { name: YES })).toBeSelected();
});

it("does not unselect selected button if re-pressed", async () => {
  const user = userEvent.setup();
  render(<StatefulRadioWrapper options={[YES]} />);

  await user.press(screen.getByRole("radio", { name: YES }));
  const yesRadio = screen.getByRole("radio", { name: YES });
  expect(yesRadio).toBeSelected();
  await user.press(yesRadio);
  expect(screen.getByRole("radio", { name: YES })).toBeSelected();
});

it("renders multiple buttons", () => {
  const MAYBE = "Maybe";
  render(<StatefulRadioWrapper options={[YES, NO, MAYBE]} />);
  expect(screen.getByRole("radio", { name: YES })).toBeOnTheScreen();
  expect(screen.getByRole("radio", { name: NO })).toBeOnTheScreen();
  expect(screen.getByRole("radio", { name: MAYBE })).toBeOnTheScreen();
});

it("only selects one button at a time", async () => {
  const user = userEvent.setup();
  render(<StatefulRadioWrapper options={[YES, NO]} />);

  await user.press(screen.getByRole("radio", { name: YES }));
  expect(screen.getByRole("radio", { name: YES })).toBeSelected();
  expect(screen.getByRole("radio", { name: NO })).not.toBeSelected();

  await user.press(screen.getByRole("radio", { name: NO }));
  expect(screen.getByRole("radio", { name: NO })).toBeSelected();
  expect(screen.getByRole("radio", { name: YES })).not.toBeSelected();
});

it("calls onChange prop when value changes", async () => {
  const user = userEvent.setup();
  const onChangeMock = jest.fn();

  render(<StatefulRadioWrapper options={[YES, NO]} onChange={onChangeMock} />);

  expect(onChangeMock).not.toHaveBeenCalled();
  await user.press(screen.getByRole("radio", { name: YES }));
  expect(onChangeMock).toHaveBeenCalled();
});

const StatefulRadioWrapper = ({
  options,
  onChange,
}: {
  options: string[];
  onChange?: () => void;
}) => {
  const [radioState, setRadioState] = useState<string | null>(null);
  return (
    <RadioButtons
      selectedButton={radioState}
      setSelectedButton={setRadioState}
      options={options}
      onChange={onChange}
    />
  );
};
