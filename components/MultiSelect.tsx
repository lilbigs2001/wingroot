import { Pressable, Text, View } from "react-native";

export const MultiSelect = ({
  options,
  checkedState,
  setCheckedState,
}: {
  options: string[];
  checkedState: string[];
  setCheckedState: (value: string[]) => void;
}) => {
  return (
    <View>
      {options.map((option) => (
        <Pressable
          key={option}
          accessibilityRole="checkbox"
          accessibilityState={{ checked: checkedState?.includes(option) }}
          onPress={() => {
            if (checkedState.includes(option)) {
              setCheckedState(checkedState.filter((item) => item !== option));
              return;
            }
            setCheckedState([...checkedState, option]);
          }}
        >
          <Text>{option}</Text>
        </Pressable>
      ))}
    </View>
  );
};
