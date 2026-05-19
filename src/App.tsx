import { View, Text } from 'react-native';
import React from 'react';
import '../global.css';

const App = () => {
  return (
    <View className="flex-1 bg-black px-6 justify-center">
      {/* Title */}
      <Text className="text-white text-3xl font-bold mb-2">Starter App 🚀</Text>
      <Text className="text-neutral-400 mb-8">React Native Boilerplate</Text>

      {/* Features List */}
      <View className="space-y-4">
        <View className="bg-neutral-900 p-4 rounded-xl">
          <Text className="text-white font-semibold text-lg">
            🎨 NativeWind / Tailwind
          </Text>
          <Text className="text-neutral-400 text-sm mt-1">
            Utility-first styling setup for fast UI development
          </Text>
        </View>

        <View className="bg-neutral-900 p-4 rounded-xl">
          <Text className="text-white font-semibold text-lg">
            🧭 Navigation Ready
          </Text>
          <Text className="text-neutral-400 text-sm mt-1">
            Pre-configured React Navigation (Stack)
          </Text>
        </View>

        <View className="bg-neutral-900 p-4 rounded-xl">
          <Text className="text-white font-semibold text-lg">
            ⚡ Clean Architecture
          </Text>
          <Text className="text-neutral-400 text-sm mt-1">
            Scalable folder structure for production apps
          </Text>
        </View>

        <View className="bg-neutral-900 p-4 rounded-xl">
          <Text className="text-white font-semibold text-lg">
            🔧 Ready to Build
          </Text>
          <Text className="text-neutral-400 text-sm mt-1">
            Minimal setup, start coding immediately
          </Text>
        </View>
      </View>
    </View>
  );
};

export default App;
