import { useThemeColor } from "@/hooks/useThemeColor";
import { useAppReload } from "@/hooks/useAppReload";
import { useRouter } from "expo-router";
import { Button, ScrollView, View, Image } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { settingsStorage } from "@/db/mmkv";
import { changeLanguage } from "@/i18n";

export default function HomeScreen() {
  const router = useRouter();
  const themeColor = useThemeColor();
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;

  useEffect(() => {
    const loadLanguage = () => {
      const savedLanguage = settingsStorage.getString("language");
      if (savedLanguage) {
        i18n.changeLanguage(savedLanguage);
      }
    };
    loadLanguage();
  }, [i18n]);

  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: themeColor.background }}
    >
      <ScrollView className="flex-1">
        <View className="mt-6 w-full items-center justify-center">
          <Animated.View sharedTransitionTag="react-logo">
            <Image
              source={require("../../assets/images/react-logo.png")}
              style={{ width: 200, height: 200 }}
            />
          </Animated.View>
          <Button
            title="english"
            onPress={() => changeLanguage("en-US")}
            color={currentLanguage === "en-US" ? "#1D3D47" : "gray"}
          />
          <Button
            title="عربي"
            onPress={() => changeLanguage("ar-IQ")}
            color={currentLanguage === "ar-IQ" ? "#1D3D47" : "gray"}
          />
          <View className="mt-6">
            <Button
              title={t("color-theme")}
              onPress={() => {
                router.push("/(tabs)/theme");
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
