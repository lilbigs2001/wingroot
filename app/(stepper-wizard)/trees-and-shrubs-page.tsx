import { NO, TREES_AND_SHRUBS_QUESTION, YES } from "@/constants";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

const TreesAndShrubsPage = () => {
  return (
    <View>
      <Text>{TREES_AND_SHRUBS_QUESTION}</Text>
      <Pressable accessibilityRole="button">
        <Link replace href="/results">
          {YES}
        </Link>
      </Pressable>
      <Pressable accessibilityRole="button">
        <Link replace href="/results">
          {NO}
        </Link>
      </Pressable>
    </View>
  );
};

export default TreesAndShrubsPage;
