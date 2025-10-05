import StepperWizardStep from "@/components/StepperWizardStep";
import { TREES_AND_SHRUBS_QUESTION } from "@/constants";

const TreesAndShrubsPage = () => {
  return (
    <StepperWizardStep
      question={TREES_AND_SHRUBS_QUESTION}
      link="/results"
      replace={true}
    />
  );
};

export default TreesAndShrubsPage;
