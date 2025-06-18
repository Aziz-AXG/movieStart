import { useColorScheme as useRNColorScheme } from "react-native";

import { useThemeStore } from "@/store/themeStore";

export const useColorScheme = () => {
  const deviceScheme = useRNColorScheme();

  const { theme } = useThemeStore();

  return theme || deviceScheme;
};
