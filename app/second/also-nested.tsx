import { StyleSheet, Text, View } from "react-native";

export default function SecondNestedScreen() {
  return (
    <View style={styles.container}>
      <Text>Second Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    justifyContent: "center"
  }
})