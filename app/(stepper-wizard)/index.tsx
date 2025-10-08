import StepperWizardStep from "@/components/StepperWizardStep";
import { DRY, MOIST, SOIL_MOISTURE_QUESTION, WET } from "@/constants";
import { capitalizeWord } from "@/utils";

const SoilMoisturePage = () => {
  return (
    <StepperWizardStep
      question={SOIL_MOISTURE_QUESTION}
      link="/(stepper-wizard)/sun-page"
      multiSelectOptions={capitalizedSoilMoistures}
      title="soilMoisture"
    />
  );
};

export default SoilMoisturePage;

export const capitalizedSoilMoistures = [DRY, MOIST, WET].map((word) =>
  capitalizeWord(word),
);
