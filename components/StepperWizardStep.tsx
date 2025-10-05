import { NO, YES } from "@/constants";
import { Href, Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

const StepperWizardStep = ({
  question,
  link,
  replace = false,
}: {
  question: string;
  link: Href;
  replace?: boolean;
}) => {
  return (
    <View>
      <Text>{question}</Text>
      <Pressable accessibilityRole="button">
        <Link replace={replace} href={link}>
          {YES}
        </Link>
      </Pressable>
      <Pressable accessibilityRole="button">
        <Link replace={replace} href={link}>
          {NO}
        </Link>
      </Pressable>
    </View>
  );
};

export default StepperWizardStep;
