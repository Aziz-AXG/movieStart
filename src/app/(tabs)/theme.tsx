import { useThemeColor } from "@/hooks/useThemeColor";
import { useThemeStore } from "@/store/themeStore";
import { useRouter } from "expo-router";
import { useTranslation } from "react-i18next";
import { Button, Image, ScrollView } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ThemeScreen() {
  const { theme, setTheme } = useThemeStore();
  const themeColor = useThemeColor();
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <SafeAreaView
      className="flex-1 items-center justify-center"
      style={{ backgroundColor: themeColor.background }}
    >
      <ScrollView className="flex flex-1 p-4">
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
        <Animated.View sharedTransitionTag="react-logo">
          <Image
            source={require("../../assets/images/react-logo.png")}
            style={{ width: 200, height: 200 }}
          />
        </Animated.View>
        <Button title={t("home")} onPress={() => router.push("/(tabs)")} />
      </ScrollView>
    </SafeAreaView>
  );
}
