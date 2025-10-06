import { NO, YES } from "@/constants";
import { Href, Link } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

const StepperWizardStep = ({
  question,
  link,
  radio = false,
  multiSelect,
  replace = false,
}: {
  question: string;
  link: Href;
  radio?: boolean;
  multiSelect?: string[];
  replace?: boolean;
}) => {
  const [yesChecked, setYesChecked] = useState(false);
  return (
    <View>
      <Text>{question}</Text>
      {radio && (
        <Pressable
          onPress={() => setYesChecked((prev) => !prev)}
          accessibilityRole="radio"
          accessibilityState={{ checked: yesChecked }}
        >
          <Text>{YES}</Text>
        </Pressable>
      )}
      {radio && (
        <Pressable accessibilityRole="radio">
          <Text>{NO}</Text>
        </Pressable>
      )}
      {multiSelect &&
        multiSelect.map((text) => {
          return (
            <Pressable key={text} accessibilityRole="checkbox">
              <Text>{text}</Text>
            </Pressable>
          );
        })}
      <Pressable accessibilityRole="button">
        <Link replace={replace} href={link}>
          Next
        </Link>
      </Pressable>
    </View>
  );
};

export default StepperWizardStep;
