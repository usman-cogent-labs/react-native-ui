import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-neutral-800">
      <Text>Hello world</Text>
    </SafeAreaView>
  );
}
