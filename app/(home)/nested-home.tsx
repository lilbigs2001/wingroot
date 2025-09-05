import { StyleSheet, Text, View } from "react-native";

export default function IndexScreen() {
  return (
    <View style={styles.container}>
      <Text>Nested Home Screen</Text>
      {/* <Link href="(home)/nested-home">
        <Button title="Go to nested Home screen" />
      </Link> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    justifyContent: "center"
  }
})