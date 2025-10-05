import StepperWizardStep from "@/components/StepperWizardStep";
import { DEER_QUESTION } from "@/constants";

const DeerPage = () => {
  return (
    <StepperWizardStep
      question={DEER_QUESTION}
      link="/(stepper-wizard)/trees-and-shrubs-page"
    />
  );
};

export default DeerPage;
