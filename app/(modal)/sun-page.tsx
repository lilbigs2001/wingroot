import { NO, SUN_QUESTION, YES } from "@/constants";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

const SunPage = () => {
  return (
    <View>
      <Text>{SUN_QUESTION}</Text>
      <Pressable accessibilityRole="button">
        <Link href="/(modal)/deer-page">{YES}</Link>
      </Pressable>
      <Pressable accessibilityRole="button">
        <Link href="/(modal)/deer-page">{NO}</Link>
      </Pressable>
    </View>
  );
};

export default SunPage;
