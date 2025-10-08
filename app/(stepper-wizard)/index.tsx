import StepperWizardStep from "@/components/StepperWizardStep";
import { DRY, MOIST, SOIL_MOISTURE_QUESTION, WET } from "@/constants";

const SoilMoisturePage = () => {
  return (
    <StepperWizardStep
      question={SOIL_MOISTURE_QUESTION}
      link="/(stepper-wizard)/sun-page"
      multiSelectOptions={[DRY, MOIST, WET]}
    />
  );
};

export default SoilMoisturePage;
