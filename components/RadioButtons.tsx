import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export const RadioButtons = ({ options }: { options: string[] }) => {
  const [checked, setChecked] = useState("");
  return (
    <View>
      {options.map((option) => (
        <Pressable
          key={option}
          onPress={() => setChecked(option)}
          accessibilityRole="radio"
          accessibilityState={{ checked: checked === option }}
        >
          <Text>{option}</Text>
        </Pressable>
      ))}
    </View>
  );
};
