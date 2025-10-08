import { Href, Link } from "expo-router";
import { useEffect, useState } from "react";
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
  const [checkedState, setCheckedState] = useState<string[]>([]);

  useEffect(() => {
    if (checkedState.length > 0) setNextDisabled(false);
  }, [checkedState]);

  return (
    <View>
      <Text>{question}</Text>
      {radioOptions ? (
        <RadioButtons
          options={radioOptions}
          onChange={() => setNextDisabled(false)}
        />
      ) : multiSelectOptions ? (
        <MultiSelect
          checkedState={checkedState}
          setCheckedState={setCheckedState}
          options={multiSelectOptions}
        />
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
