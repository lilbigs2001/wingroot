import StepperWizardStep from "@/components/StepperWizardStep";
import { FULL_SHADE, FULL_SUN, PARTIAL_SUN, SUN_QUESTION } from "@/constants";
import { capitalizeWord } from "@/utils";

const SunPage = () => {
  return (
    <StepperWizardStep
      question={SUN_QUESTION}
      link="/(stepper-wizard)/deer-page"
      multiSelectOptions={capitalizedSunLevels}
      title="sunLevel"
    />
  );
};

export default SunPage;

export const capitalizedSunLevels = [FULL_SUN, PARTIAL_SUN, FULL_SHADE].map(
  (word) => capitalizeWord(word),
);
