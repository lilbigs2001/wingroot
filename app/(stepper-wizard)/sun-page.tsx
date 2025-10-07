import StepperWizardStep from "@/components/StepperWizardStep";
import { FULL_SHADE, FULL_SUN, PARTIAL_SUN, SUN_QUESTION } from "@/constants";

const SunPage = () => {
  return (
    <StepperWizardStep
      question={SUN_QUESTION}
      link="/(stepper-wizard)/deer-page"
      multiSelectOptions={[FULL_SUN, PARTIAL_SUN, FULL_SHADE]}
    />
  );
};

export default SunPage;
