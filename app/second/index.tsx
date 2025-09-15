import { Link } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function SecondScreen() {
  return (
    <View style={styles.container}>
      <Text>Second Screen</Text>
      <Link href="/second/nested" push asChild>
        <Button title="Push to /second/nested" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    justifyContent: "center",
  },
});
