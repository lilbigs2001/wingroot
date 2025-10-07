import { Href, Link } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { MultiSelect } from "./MultiSelect";
import { RadioButtons } from "./RadioButtons";

const StepperWizardStep = ({
  question,
  link,
  radioOptions,
  replace = false,
  multiSelectOptions,
}: {
  question: string;
  link: Href;
  radioOptions?: string[];
  replace?: boolean;
  multiSelectOptions?: string[];
}) => {
  const [nextDisabled, setNextDisabled] = useState(true);
  return (
    <View>
      <Text>{question}</Text>
      {radioOptions ? (
        <RadioButtons
          options={radioOptions}
          onChange={() => setNextDisabled(false)}
        />
      ) : multiSelectOptions ? (
        <MultiSelect options={multiSelectOptions} />
      ) : null}
      <Pressable disabled={nextDisabled} accessibilityRole="button">
        <Link replace={replace} href={link}>
          Next
        </Link>
      </Pressable>
    </View>
  );
};

export default StepperWizardStep;
