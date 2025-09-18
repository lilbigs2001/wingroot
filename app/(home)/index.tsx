import { Image, StyleSheet, Text, View } from "react-native";

export default function IndexScreen() {
  return (
    <>
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-xl font-bold text-blue-500">Wingroot</Text>
      </View>
      <Image
        className="size-32"
        source={require("../../assets/icons/adaptive-icon.png")}
        accessibilityLabel="Wingroot logo"
      />
      {/* <View style={styles.container}>
        <Text>Home Screen</Text>
        <Link href="/nested-home" push asChild>
          <Button title="Go to nested Home screen" />
        </Link>
      </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    justifyContent: "center",
  },
});
