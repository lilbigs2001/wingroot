import { Link } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function IndexScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Link href="/nested-home" push asChild>
        <Button title="Go to nested Home screen" />
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
