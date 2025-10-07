import { Pressable, Text, View } from "react-native";

export const MultiSelect = ({ options }: { options: string[] }) => (
  <View>
    {options.map((option) => (
      <Pressable key={option} accessibilityRole="checkbox">
        <Text>{option}</Text>
      </Pressable>
    ))}
  </View>
);
