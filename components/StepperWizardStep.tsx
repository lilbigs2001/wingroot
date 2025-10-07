import { Href, Link } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { RadioButtons } from "./RadioButtons";

const StepperWizardStep = ({
  question,
  link,
  radioOptions,
  replace = false,
}: {
  question: string;
  link: Href;
  radioOptions?: string[];
  replace?: boolean;
}) => {
  const [nextDisabled, setNextDisabled] = useState(true);
  return (
    <View>
      <Text>{question}</Text>
      {radioOptions && (
        <RadioButtons
          options={radioOptions}
          onChange={() => setNextDisabled(false)}
        />
      )}
      <Pressable disabled={nextDisabled} accessibilityRole="button">
        <Link replace={replace} href={link}>
          Next
        </Link>
      </Pressable>
    </View>
  );
};

export default StepperWizardStep;
