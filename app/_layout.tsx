import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { useColorScheme } from "react-native";

import "@/global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/MadaniArabicDEMO-Regular.otf"),
  });

  useEffect(() => {
    if (loaded) {
      (async () => {
        await SplashScreen.hideAsync();
      })();
    }
  }, [loaded]);

  return (
    <>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <Stack
        screenOptions={{
          headerShown: false,
          // contentStyle: {
          //   direction: i18n.dir(),
          // },
        }}
      >
        <Stack.Screen name="(tabs)" />
      </Stack>
    </>
  );
}
