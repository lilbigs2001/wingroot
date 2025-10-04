import { NO, SOIL_MOISTURE_QUESTION, YES } from "@/constants";
import { Pressable, Text, View } from "react-native";

const StepperWizard = () => {
  return (
    <View>
      <Text>{SOIL_MOISTURE_QUESTION}</Text>
      <Pressable accessibilityRole="button">
        <Text>{YES}</Text>
      </Pressable>
      <Pressable accessibilityRole="button">
        <Text>{NO}</Text>
      </Pressable>
    </View>
  );
};

export default StepperWizard;
