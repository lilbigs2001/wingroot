import { Image, Pressable, Text, View } from "react-native";

// Tackling layout with step 1 of CSS Layout guide

export default function IndexScreen() {
  return (
    <View className="flex-1 justify-around bg-white">
      {/* <View className="bg-blue-300">
        <Text>1</Text>
      </View>
      <View className="bg-red-300">
        <Text>2</Text>
      </View> */}
      <View className="bg-white">
        <View className="flex items-end">
          <Image
            className="size-24 mr-16"
            source={require("../../assets/icons/in-app-logo.png")}
            accessibilityLabel="Wingroot logo"
          />
        </View>
        <View className="flex items-center">
          <Text className="text-5xl font-bold text-blue-500 underline">
            Wingroot
          </Text>
        </View>
      </View>
      <View className="flex items-center justify-center">
        <Pressable
          className="bg-green-400 w-3/4 h-1/3 rounded-full flex justify-center items-center"
          accessibilityRole="button"
        >
          <Text className="text-2xl font-semibold">Plan your garden</Text>
        </Pressable>
        <Text className="m-8 text-xl">
          {
            "(Plant suggestions are currently tailored for the Great Lakes region — more regions coming soon!)"
          }
        </Text>
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
