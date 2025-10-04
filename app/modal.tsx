import { SOIL_MOISTURE_QUESTION } from "@/constants";
import { Pressable, Text, View } from "react-native";

const StepperWizard = () => {
  return (
    <View>
      <Text>{SOIL_MOISTURE_QUESTION}</Text>
      <Pressable accessibilityRole="button">
        <Text>Yes</Text>
      </Pressable>
    </View>
  );
};

export default StepperWizard;
