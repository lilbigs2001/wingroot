import { Pressable, Text, View } from "react-native";

export const RadioButtons = ({
  selectedButton,
  setSelectedButton,
  options,
  onChange,
}: {
  selectedButton: string | null;
  setSelectedButton: React.Dispatch<React.SetStateAction<string | null>>;
  options: string[];
  onChange?: () => void;
}) => {
  return (
    <View>
      {options.map((option) => (
        <Pressable
          key={option}
          onPress={() => {
            setSelectedButton(option);
            if (onChange) onChange();
          }}
          accessibilityRole="radio"
          accessibilityState={{ selected: option === selectedButton }}
        >
          <Text>{option}</Text>
        </Pressable>
      ))}
    </View>
  );
};
