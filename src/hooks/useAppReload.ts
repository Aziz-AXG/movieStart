import { Platform } from "react-native";
import { DevSettings } from "react-native";

export const useAppReload = () => {
  const reloadApp = () => {
    if (Platform.OS === 'android') {
      DevSettings.reload();
    }
  };

  const isAndroid = Platform.OS === 'android';

  return {
    reloadApp,
    isAndroid,
  };
}; 