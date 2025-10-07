import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export const MultiSelect = ({ options }: { options: string[] }) => {
  const [checked, setChecked] = useState<string[]>([]);
  return (
    <View>
      {options.map((option) => (
        <Pressable
          key={option}
          accessibilityRole="checkbox"
          accessibilityState={{ checked: checked.includes(option) }}
          onPress={() => {
            if (checked.includes(option)) {
              setChecked((prev) => prev.filter((item) => item !== option));
              return;
            }
            setChecked((prev) => [...prev, option]);
          }}
        >
          <Text>{option}</Text>
        </Pressable>
      ))}
    </View>
  );
};
