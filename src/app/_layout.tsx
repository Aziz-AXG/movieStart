import "@/global.css";
import { useColorScheme } from "@/hooks/useColorScheme";
import { loadLanguage } from "@/i18n";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { enableScreens } from "react-native-screens";

//? Enable screens for better performance and shared transitions
enableScreens();

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const { i18n } = useTranslation();

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/MadaniArabicDEMO-Regular.otf"),
  });
  const [i18nInitialized, setI18nInitialized] = useState(false);

  useEffect(() => {
    if (loaded) {
      (async () => {
        await loadLanguage();
        setI18nInitialized(true);
        await SplashScreen.hideAsync();
      })();
    }
  }, [loaded]);

  if (!loaded || !i18nInitialized) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <QueryClientProvider client={queryClient}>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: {
              direction: i18n.dir(),
            },
          }}
        >
          <Stack.Screen name="(tabs)" />
        </Stack>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
