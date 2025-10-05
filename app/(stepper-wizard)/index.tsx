import StepperWizardStep from "@/components/StepperWizardStep";
import { SOIL_MOISTURE_QUESTION } from "@/constants";

const SoilMoisturePage = () => {
  return (
    <StepperWizardStep
      question={SOIL_MOISTURE_QUESTION}
      link="/(stepper-wizard)/sun-page"
    />
  );
};

export default SoilMoisturePage;
