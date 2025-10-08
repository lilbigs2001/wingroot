import StepperWizardStep from "@/components/StepperWizardStep";
import { FULL_SHADE, FULL_SUN, NEXT, NO, PARTIAL_SUN, YES } from "@/constants";
import { render, screen, userEvent } from "@testing-library/react-native";

it("has correct text", () => {
  renderStepperPage();
  expect(screen.getByRole("text", { name: SAMPLE_QUESTION })).toBeOnTheScreen();
});

it(`displays a ${NEXT} button`, () => {
  renderStepperPage();
  expect(screen.getByRole("button", { name: NEXT })).toBeOnTheScreen();
});

it(`disables ${NEXT} button by default`, () => {
  renderStepperPage();
  expect(screen.getByRole("button", { name: NEXT })).toBeDisabled();
});

it("displays radio buttons", () => {
  renderStepperPageWithRadioButtons();
  expect(screen.getByRole("radio", { name: YES })).toBeOnTheScreen();
  expect(screen.getByRole("radio", { name: NO })).toBeOnTheScreen();
});

it(`selecting radio button enables ${NEXT} button`, async () => {
  const user = userEvent.setup();
  renderStepperPageWithRadioButtons();
  await user.press(screen.getByRole("radio", { name: NO }));
  expect(screen.getByRole("button", { name: NEXT })).toBeEnabled();
});

it("displays multi-select checkboxes", () => {
  renderStepperPageWithMultipleCheckboxes([FULL_SUN, PARTIAL_SUN, FULL_SHADE]);
  expect(screen.getByRole("checkbox", { name: FULL_SUN })).toBeOnTheScreen();
  expect(screen.getByRole("checkbox", { name: PARTIAL_SUN })).toBeOnTheScreen();
  expect(screen.getByRole("checkbox", { name: FULL_SHADE })).toBeOnTheScreen();
});

it("checks and unchecks multi-select checkbox when pressed", async () => {
  const user = userEvent.setup();
  render(
    <StepperWizardStep
      question={SAMPLE_QUESTION}
      link="/"
      multiSelectOptions={[FULL_SUN]}
    />,
  );
  await user.press(screen.getByRole("checkbox"));
  expect(screen.getByRole("checkbox")).toBeChecked();
  await user.press(screen.getByRole("checkbox"));
  expect(screen.getByRole("checkbox")).not.toBeChecked();
});

it("checks and unchecks multiple multi-select checkboxes", async () => {
  const user = userEvent.setup();
  const clickAllCheckboxes = async () => {
    await user.press(screen.getByRole("checkbox", { name: FULL_SUN }));
    await user.press(screen.getByRole("checkbox", { name: PARTIAL_SUN }));
    await user.press(screen.getByRole("checkbox", { name: FULL_SHADE }));
  };

  renderStepperPageWithMultipleCheckboxes([FULL_SUN, PARTIAL_SUN, FULL_SHADE]);

  await clickAllCheckboxes();
  expect(screen.getByRole("checkbox", { name: FULL_SUN })).toBeChecked();
  expect(screen.getByRole("checkbox", { name: PARTIAL_SUN })).toBeChecked();
  expect(screen.getByRole("checkbox", { name: FULL_SHADE })).toBeChecked();

  await clickAllCheckboxes();
  expect(screen.getByRole("checkbox", { name: FULL_SUN })).not.toBeChecked();
  expect(screen.getByRole("checkbox", { name: PARTIAL_SUN })).not.toBeChecked();
  expect(screen.getByRole("checkbox", { name: FULL_SHADE })).not.toBeChecked();
});

it(`checking multi-select checkbox enables ${NEXT} button`, async () => {
  const user = userEvent.setup();
  renderStepperPageWithSingleCheckbox();

  await user.press(screen.getByRole("checkbox"));
  expect(screen.getByRole("button", { name: NEXT })).toBeEnabled();
});

it(`unchecking multi-select checkbox disables ${NEXT} button`, async () => {
  const user = userEvent.setup();
  renderStepperPageWithSingleCheckbox();

  await user.press(screen.getByRole("checkbox"));
  await user.press(screen.getByRole("checkbox"));
  expect(screen.getByRole("button", { name: NEXT })).toBeDisabled();
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

const renderStepperPage = () => {
  render(<StepperWizardStep question={SAMPLE_QUESTION} link="/" />);
};
const SAMPLE_QUESTION = "Sample Question";

const renderStepperPageWithRadioButtons = () => {
  render(
    <StepperWizardStep
      question={SAMPLE_QUESTION}
      link="/"
      radioOptions={[YES, NO]}
    />,
  );
};

const renderStepperPageWithMultipleCheckboxes = (options: string[]) => {
  render(
    <StepperWizardStep
      question={SAMPLE_QUESTION}
      link="/"
      multiSelectOptions={options}
    />,
  );
};

const renderStepperPageWithSingleCheckbox = () => {
  render(
    <StepperWizardStep
      question={SAMPLE_QUESTION}
      link="/"
      multiSelectOptions={[FULL_SUN]}
    />,
  );
};
