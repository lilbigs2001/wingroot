import { DEER_QUESTION, NO, YES } from "@/constants";
import { Pressable, Text, View } from "react-native";

const DeerPage = () => {
  return (
    <View>
      <Text>{DEER_QUESTION}</Text>
      <Pressable accessibilityRole="button">
        <Text>{YES}</Text>
      </Pressable>
      <Pressable accessibilityRole="button">
        <Text>{NO}</Text>
      </Pressable>
    </View>
  );
};

export default DeerPage;
