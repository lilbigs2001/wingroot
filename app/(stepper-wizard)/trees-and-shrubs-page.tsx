import { NO, TREES_AND_SHRUBS_QUESTION, YES } from "@/constants";
import { Pressable, Text, View } from "react-native";

const TreesAndShrubsPage = () => {
  return (
    <View>
      <Text>{TREES_AND_SHRUBS_QUESTION}</Text>
      <Pressable accessibilityRole="button">
        <Text>{YES}</Text>
      </Pressable>
      <Pressable accessibilityRole="button">
        <Text>{NO}</Text>
      </Pressable>
    </View>
  );
};

export default TreesAndShrubsPage;
