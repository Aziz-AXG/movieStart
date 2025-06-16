import { useFonts } from 'expo-font';
import { Slot, SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { TamaguiProvider } from 'tamagui';

import config from '../tamagui.config';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from 'styled-components/native';
import { theme } from '~/styleComponents/themes/theme';


export default function Layout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });


  const queryClient = new QueryClient();

  return (

    <TamaguiProvider config={config}>
      <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>


      {/* <Slot /> */}
      <Stack screenOptions={{headerShown:false}} >
      </Stack>
      </ThemeProvider>

      </QueryClientProvider>

      </GestureHandlerRootView>
      {/* <Stack/> */}
    </TamaguiProvider>
  );
}
