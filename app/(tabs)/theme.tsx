import { useRouter } from "expo-router";
import { Button, ScrollView } from "react-native";
import Animated from "react-native-reanimated";

import { useThemeColor } from "@/hooks/useThemeColor";
import { useThemeStore } from "@/store/themeStore";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ThemeScreen() {
  const { theme, setTheme } = useThemeStore();
  const themeColor = useThemeColor();
  const router = useRouter();
  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: themeColor.background }}
    >
      <ScrollView className="flex-1 p-4">
        <Button
          title="Dark"
          onPress={() => setTheme("dark")}
          color={theme === "dark" ? "#1D3D47" : "gray"}
        />
        <Button
          title="Light"
          onPress={() => setTheme("light")}
          color={theme === "light" ? "#1D3D47" : "gray"}
        />
        <Animated.Image
          sharedTransitionTag="react-logo"
          source={require("../../assets/images/react-logo.png")}
          style={{ width: 200, height: 200 }}
        />
        <Button title="Go to Home" onPress={() => router.push("/(tabs)")} />
      </ScrollView>
    </SafeAreaView>
  );
}
