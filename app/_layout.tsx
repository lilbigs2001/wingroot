import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "../global.css";

// SplashScreen.preventAutoHideAsync();

// SplashScreen.setOptions({
//   duration: 400,
//   fade: true
// })

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Tabs screenOptions={{ tabBarActiveTintColor: "teal" }}>
        <Tabs.Screen
          name="(home)"
          options={{
            headerShown: false,
            title: "Home",
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="beehive-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="second"
          options={{
            headerShown: false,
            title: "Pollinator Info",
            tabBarLabel: "Pollinator Info",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bee" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="third"
          options={{
            title: "Plant Library",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Entypo name="flower" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
