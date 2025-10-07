import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export const RadioButtons = ({
  options,
  onChange,
}: {
  options: string[];
  onChange?: () => void;
}) => {
  const [selected, setSelected] = useState("");
  return (
    <View>
      {options.map((option) => (
        <Pressable
          key={option}
          onPress={() => {
            setSelected(option);
            if (onChange) onChange();
          }}
          accessibilityRole="radio"
          accessibilityState={{ selected: selected === option }}
        >
          <Text>{option}</Text>
        </Pressable>
      ))}
    </View>
  );
};
