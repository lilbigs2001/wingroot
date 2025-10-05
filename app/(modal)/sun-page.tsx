import { NO, SUN_QUESTION, YES } from "@/constants";
import { Pressable, Text, View } from "react-native";

const SunPage = () => {
  return (
    <View>
      <Text>{SUN_QUESTION}</Text>
      <Pressable accessibilityRole="button">
        <Text>{YES}</Text>
      </Pressable>
      <Pressable accessibilityRole="button">
        <Text>{NO}</Text>
      </Pressable>
    </View>
  );
};

export default SunPage;
