import StepperWizardStep from "@/components/StepperWizardStep";
import { DEER_QUESTION, NO, YES } from "@/constants";

const DeerPage = () => {
  return (
    <StepperWizardStep
      question={DEER_QUESTION}
      link="/(stepper-wizard)/trees-and-shrubs-page"
      radioOptions={[YES, NO]}
    />
  );
};

export default DeerPage;
