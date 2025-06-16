// app/_stack/_layout.tsx
import { Stack } from 'expo-router';

export default function StackLayout() {
  return (
    <Stack>
      
      <Stack.Screen name="(drawer)" options={{ headerShown: false  }} />
      <Stack.Screen
        name="[id]"
        options={{
          title: 'التفاصيل',
          headerShown: true,
          presentation: 'modal', // يمكنك استخدام 'modal' حسب الرغبة
        }}
      />
    </Stack>
  );
}
