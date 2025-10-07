import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export const RadioButtons = ({ options }: { options: string[] }) => {
  const [checked, setChecked] = useState(false);
  return (
    <View>
      {options.map((option) => (
        <Pressable
          key={option}
          onPress={() => setChecked(true)}
          accessibilityRole="radio"
          accessibilityState={{ checked }}
        >
          <Text>{option}</Text>
        </Pressable>
      ))}
    </View>
  );
};
