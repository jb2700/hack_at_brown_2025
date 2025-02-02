import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View>
      <Text>Welcome to Doctor AI!</Text>
      <Button title="Go to Login" onPress={() => router.push('/chat_text')} />
    </View>
  );
}
