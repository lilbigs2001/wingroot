import { NO, SOIL_MOISTURE_QUESTION, YES } from "@/constants";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

const SoilMoisturePage = () => {
  return (
    <View>
      <Text>{SOIL_MOISTURE_QUESTION}</Text>
      <Pressable accessibilityRole="button">
        <Link href="/(stepper-wizard)/sun-page">{YES}</Link>
      </Pressable>
      <Pressable accessibilityRole="button">
        <Link href="/(stepper-wizard)/sun-page">{NO}</Link>
      </Pressable>
    </View>
  );
};

export default SoilMoisturePage;
