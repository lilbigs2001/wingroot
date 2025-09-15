import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="nested-home" options={{ title: "Nested Home" }} />
    </Stack>
  );
}
