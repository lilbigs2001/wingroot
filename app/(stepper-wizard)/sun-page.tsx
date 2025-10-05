import StepperWizardStep from "@/components/StepperWizardStep";
import { SUN_QUESTION } from "@/constants";

const SunPage = () => {
  return (
    <StepperWizardStep
      question={SUN_QUESTION}
      link="/(stepper-wizard)/deer-page"
    />
  );
};

export default SunPage;
