import {
  HELP_US_IMPROVE,
  PLAN_YOUR_GARDEN,
  REGIONAL_DISCLAIMER,
  WINGROOT,
  WINGROOT_LOGO_LABEL,
} from "@/constants";
import { Image, Pressable, Text, View } from "react-native";

// Tackling layout with step 1 of CSS Layout guide

export default function IndexScreen() {
  return (
    <View className="flex-1 bg-white">
      {/* <View className="bg-blue-300">
        <Text>1</Text>
      </View>
      <View className="bg-red-300">
        <Text>2</Text>
      </View> */}
      <View className="flex-1">
        <View className="flex items-end">
          <Image
            className="size-24 mr-16"
            source={require("../../assets/icons/in-app-logo.png")}
            accessibilityLabel={WINGROOT_LOGO_LABEL}
          />
        </View>
        <View className="flex items-center">
          <Text className="text-5xl font-bold text-blue-500 underline">
            {WINGROOT}
          </Text>
        </View>
      </View>
      <View className="flex-1 items-center justify-end">
        <Pressable
          className="bg-green-400 w-3/4 h-1/3 rounded-full flex justify-center items-center"
          accessibilityRole="button"
        >
          <Text className="text-2xl font-semibold">{PLAN_YOUR_GARDEN}</Text>
        </Pressable>
        <Text className="m-8 text-xl">{REGIONAL_DISCLAIMER}</Text>
      </View>
      <View className="flex-1 items-center justify-center">
        <Pressable
          className="bg-blue-300 w-1/2 h-1/4 flex justify-center items-center rounded-full"
          accessibilityRole="button"
        >
          <Text>{HELP_US_IMPROVE}</Text>
        </Pressable>
      </View>
      {/* <View style={styles.container}>
        <Text>Home Screen</Text>
        <Link href="/nested-home" push asChild>
          <Button title="Go to nested Home screen" />
        </Link>
      </View> */}
    </View>
  );
}
