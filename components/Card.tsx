import { View, Text, TouchableOpacity } from 'react-native';

interface CardProps {
  title: string;
  description: string;
  onPress?: () => void;
}

export default function Card({ title, description, onPress }: CardProps) {
  return (
    <TouchableOpacity 
      className="bg-white p-4 rounded-lg shadow-md mb-4"
      onPress={onPress}
      disabled={!onPress}
    >
      <Text className="text-lg font-semibold text-gray-800 mb-2">
        {title}
      </Text>
      <Text className="text-gray-600">
        {description}
      </Text>
    </TouchableOpacity>
  );
} 