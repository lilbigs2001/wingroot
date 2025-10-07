import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export const RadioButtons = ({
  options,
  onChange,
}: {
  options: string[];
  onChange?: () => void;
}) => {
  const [checked, setChecked] = useState("");
  return (
    <View>
      {options.map((option) => (
        <Pressable
          key={option}
          onPress={() => {
            setChecked(option);
            if (onChange) onChange();
          }}
          accessibilityRole="radio"
          accessibilityState={{ checked: checked === option }}
        >
          <Text>{option}</Text>
        </Pressable>
      ))}
    </View>
  );
};
