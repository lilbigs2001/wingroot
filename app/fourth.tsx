import { StyleSheet, Text, View } from "react-native";

export default function FourthScreen() {
  return (
    <View style={styles.container}>
      <Text>Fourth Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    justifyContent: "center",
  },
});
