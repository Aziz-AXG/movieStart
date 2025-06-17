import { View, Text, ScrollView, Image, Button } from 'react-native';
import Card from '../../components/Card';
import Animated from 'react-native-reanimated';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-gray-100">
      <ScrollView className="flex-1 p-4">
        <Text className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Welcome to MovieStart
        </Text>

        <Text className="text-lg text-gray-600 text-center mb-8">
          This is a simple React Native app with NativeWind styling
        </Text>

        <Card
          title="NativeWind Styling"
          description="This card demonstrates NativeWind utility classes for styling React Native components."
        />

        <Card
          title="Tab Navigation"
          description="Use the tab bar below to navigate between different screens in the app."
        />

        <Card
          title="Clean Architecture"
          description="This app has been cleaned up and uses a simple, maintainable structure."
        />

        <Text className="text-sm text-gray-500 text-center mt-6">
          Use the tab bar below to navigate between screens
        </Text>

        <View className="items-center mt-6">
        <Animated.Image
          sharedTransitionTag="react-logo"
          source={require('../../assets/icon.png')}
          style={{ width: 200, height: 200 }}
          />
        </View>

        <View className="mt-6">
          <Button
            title="Go to Profile"
            onPress={() => {
              router.push('/(tabs)/profile');
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
