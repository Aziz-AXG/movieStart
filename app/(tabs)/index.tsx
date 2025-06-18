import { useThemeColor } from "@/hooks/useThemeColor";
import { useRouter } from "expo-router";
import { Button, ScrollView, View } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();
  const themeColor = useThemeColor();
  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: themeColor.background }}
    >
      <ScrollView className="flex-1 p-4">
        <View className="mt-6 items-center">
          <Animated.Image
            sharedTransitionTag="react-logo"
            source={require("../../assets/images/react-logo.png")}
            style={{ width: 200, height: 200 }}
          />
        </View>

        <View className="mt-6">
          <Button
            title="Go to Theme"
            onPress={() => {
              router.push("/(tabs)/theme");
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
