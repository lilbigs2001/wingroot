import { Pressable, Text } from "react-native";

export const MultiSelect = ({ options }: { options: string[] }) => (
  <Pressable accessibilityRole="checkbox">
    <Text>{options[0]}</Text>
  </Pressable>
);
