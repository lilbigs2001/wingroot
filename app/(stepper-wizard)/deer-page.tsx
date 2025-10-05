import { DEER_QUESTION, NO, YES } from "@/constants";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

const DeerPage = () => {
  return (
    <View>
      <Text>{DEER_QUESTION}</Text>
      <Pressable accessibilityRole="button">
        <Link href="/(stepper-wizard)/trees-and-shrubs-page">{YES}</Link>
      </Pressable>
      <Pressable accessibilityRole="button">
        <Link href="/(stepper-wizard)/trees-and-shrubs-page">{NO}</Link>
      </Pressable>
    </View>
  );
};

export default DeerPage;
