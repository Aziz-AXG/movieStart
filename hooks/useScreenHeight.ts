import { useState, useEffect } from "react";
import { Dimensions } from "react-native";

export function useScreenHeight() {
  const [screenHeight, setScreenHeight] = useState(
    Dimensions.get("window").height,
  );

  useEffect(() => {
    const handleChange = ({ window }: { window: { height: number } }) => {
      setScreenHeight(window.height);
    };

    const subscription = Dimensions.addEventListener("change", handleChange);

    return () => {
      subscription?.remove();
    };
  }, []);

  return screenHeight;
}
