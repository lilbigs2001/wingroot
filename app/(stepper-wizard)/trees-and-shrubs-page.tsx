import StepperWizardStep from "@/components/StepperWizardStep";
import { NO, TREES_AND_SHRUBS_QUESTION, YES } from "@/constants";

const TreesAndShrubsPage = () => {
  return (
    <StepperWizardStep
      question={TREES_AND_SHRUBS_QUESTION}
      link="/results"
      replace={true}
      radioOptions={[YES, NO]}
      title="shrubsAndTrees"
    />
  );
};

export default TreesAndShrubsPage;
