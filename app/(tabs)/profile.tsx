import { View, Text, ScrollView, Button } from 'react-native';
import Card from '../../components/Card';
import Animated from 'react-native-reanimated';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
    const router = useRouter();
  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView className="flex-1 p-4">
        <Animated.Image
          sharedTransitionTag="react-logo"
          source={require('../../assets/icon.png')}
          style={{ width: 200, height: 200 }}
        />
        <Button title="Go to Home" onPress={() => router.push('/(tabs)')} />
        <View className="bg-white p-6 rounded-xl shadow-lg mb-6">
          <Text className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Profile
          </Text>
          
          <Text className="text-gray-600 text-center mb-4">
            This is your profile page with NativeWind styling
          </Text>
        </View>
        
        <Card 
          title="User Information"
          description="Display user details and preferences here."
        />
        
        <Card 
          title="Settings"
          description="Configure app settings and preferences."
        />
        
        <Card 
          title="Statistics"
          description="View your app usage statistics and analytics."
        />
        
        <Text className="text-sm text-gray-500 text-center mt-6">
          Use the tab bar below to navigate between screens
        </Text>
      </ScrollView>
    </View>
  );
} 