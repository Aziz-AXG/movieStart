import { Ionicons } from '@expo/vector-icons';
import { color, size } from '@tamagui/themes';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
  return (
    <Drawer screenOptions={{
      headerShown: true
    }}>
      <Drawer.Screen 
        name='index' 
        options={{
          title: 'Moviestar',
          headerShown: true,
          drawerIcon: ({ color, size }: { color: string, size: number }) => 
            <Ionicons name='home' size={size} color={color} />
        }}
      />
      <Drawer.Screen 
        name='favorites'  
        options={{
          title: 'My Favorites',
          headerShown: true,
          drawerIcon: ({ color, size }: { color: string, size: number }) => 
            <Ionicons name='star-outline' size={size} color={color} />
        }}
      />
    </Drawer>
  );
}
