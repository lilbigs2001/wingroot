import StepperWizardStep from "@/components/StepperWizardStep";
import { NO, SOIL_MOISTURE_QUESTION, YES } from "@/constants";

const SoilMoisturePage = () => {
  return (
    <StepperWizardStep
      question={SOIL_MOISTURE_QUESTION}
      link="/(stepper-wizard)/sun-page"
      radioOptions={[YES, NO]}
    />
  );
};

export default SoilMoisturePage;
