import StepperWizardStep from "@/components/StepperWizardStep";
import { FULL_SHADE, FULL_SUN, NEXT, NO, PARTIAL_SUN, YES } from "@/constants";
import { render, screen, userEvent } from "@testing-library/react-native";

it("has correct text", () => {
  renderStepperWizard();
  expect(screen.getByRole("text", { name: SAMPLE_QUESTION })).toBeOnTheScreen();
});

it(`displays a ${NEXT} button`, () => {
  renderStepperWizard();
  expect(screen.getByRole("button", { name: NEXT })).toBeOnTheScreen();
});

it(`disables ${NEXT} button by default`, () => {
  renderStepperWizard();
  expect(screen.getByRole("button", { name: NEXT })).toBeDisabled();
});

it("displays radio buttons", () => {
  render(
    <StepperWizardStep
      question={SAMPLE_QUESTION}
      link="/"
      radioOptions={[YES, NO]}
    />,
  );
  expect(screen.getByRole("radio", { name: YES })).toBeOnTheScreen();
  expect(screen.getByRole("radio", { name: NO })).toBeOnTheScreen();
});

it(`selecting radio button enables ${NEXT} button`, async () => {
  const user = userEvent.setup();
  render(
    <StepperWizardStep
      question={SAMPLE_QUESTION}
      link="/"
      radioOptions={[YES, NO]}
    />,
  );
  await user.press(screen.getByRole("radio", { name: NO }));
  expect(screen.getByRole("button", { name: NEXT })).toBeEnabled();
});

it("displays multi-option selectors", () => {
  render(
    <StepperWizardStep
      question={SAMPLE_QUESTION}
      link="/"
      multiSelectOptions={[FULL_SUN, PARTIAL_SUN, FULL_SHADE]}
    />,
  );
  expect(screen.getByRole("checkbox", { name: FULL_SUN })).toBeOnTheScreen();
  expect(screen.getByRole("checkbox", { name: PARTIAL_SUN })).toBeOnTheScreen();
  expect(screen.getByRole("checkbox", { name: FULL_SHADE })).toBeOnTheScreen();
});

it("only allows either radio buttons or multi-select to render, not both", () => {
  render(
    <StepperWizardStep
      question={SAMPLE_QUESTION}
      link="/"
      radioOptions={[YES]}
      multiSelectOptions={[FULL_SUN]}
    />,
  );
  expect(screen.getByRole("radio")).toBeOnTheScreen();
  expect(screen.queryByRole("checkbox")).not.toBeOnTheScreen();
});

const renderStepperWizard = () => {
  render(<StepperWizardStep question={SAMPLE_QUESTION} link="/" />);
};
const SAMPLE_QUESTION = "Sample Question";
