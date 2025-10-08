import { YES } from "@/constants";
import { StepperContext } from "@/context/StepperContext";
import { PlantFilters } from "@/types";
import { Href, useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { MultiSelect } from "./MultiSelect";
import { RadioButtons } from "./RadioButtons";

const StepperWizardStep = ({
  question,
  link,
  radioOptions,
  replace = false,
  multiSelectOptions,
  title,
}: {
  question: string;
  link: Href;
  radioOptions?: string[];
  replace?: boolean;
  multiSelectOptions?: string[];
  title: keyof PlantFilters;
}) => {
  const [nextDisabled, setNextDisabled] = useState(true);
  const [checkedState, setCheckedState] = useState<string[]>([]);
  const [radioState, setRadioState] = useState<string | null>(null);
  const { updateSelections } = useContext(StepperContext);
  const router = useRouter();

  useEffect(() => {
    if (checkedState.length > 0) setNextDisabled(false);
    else setNextDisabled(true);
  }, [checkedState]);

  return (
    <View>
      <Text>{question}</Text>
      {radioOptions ? (
        <RadioButtons
          selectedButton={radioState}
          setSelectedButton={setRadioState}
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
      <Pressable
        onPress={() => {
          if (multiSelectOptions) {
            updateSelections({ [title]: checkedState });
          } else if (radioOptions) {
            updateSelections({ [title]: radioState === YES });
          }
          if (replace) {
            router.replace(link);
            return;
          }
          router.push(link);
        }}
        disabled={nextDisabled}
        accessibilityRole="button"
      >
        <Text>Next</Text>
      </Pressable>
    </View>
  );
};

export default StepperWizardStep;
