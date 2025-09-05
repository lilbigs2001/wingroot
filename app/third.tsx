import { StyleSheet, Text, View } from "react-native";

export default function ThirdScreen() {
  return (
    <View style={styles.container}>
      <Text>Third Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    justifyContent: "center"
  }
})