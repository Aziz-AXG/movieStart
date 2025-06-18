import { HapticTab } from "@/components/ui/HapticTab";
import { useThemeColor } from "@/hooks/useThemeColor";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Platform } from "react-native";

export default function TabLayout() {
  const themeColor = useThemeColor();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: themeColor.primary,
        tabBarInactiveTintColor: themeColor.icon,
        tabBarButton: HapticTab,
        tabBarStyle: {
          ...(Platform.OS === "ios" ? { position: "absolute" } : {}),
          backgroundColor: themeColor.background,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="theme"
        options={{
          title: "Theme",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="paint-brush" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
