import { Href, Link } from "expo-router";
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
  return (
    <View>
      <Text>{question}</Text>
      {radioOptions && <RadioButtons options={radioOptions} />}
      <Pressable accessibilityRole="button">
        <Link replace={replace} href={link}>
          Next
        </Link>
      </Pressable>
    </View>
  );
};

export default StepperWizardStep;
