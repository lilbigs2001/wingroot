import { SOIL_MOISTURE_QUESTION } from "@/constants";
import { Text, View } from "react-native";

const StepperWizard = () => {
  return (
    <View>
      <Text>{SOIL_MOISTURE_QUESTION}</Text>
    </View>
  );
};

export default StepperWizard;
