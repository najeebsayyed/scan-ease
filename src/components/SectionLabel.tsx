import React from 'react';
import { Text, View } from 'react-native';

type SectionLabelProps = {
  label: string;
  className?: string;
};

const SectionLabel = ({ label, className = '' }: SectionLabelProps) => {
  return (
    <View className={` mt-5 mb-2${className}`}>
      <Text className="text-lg font-medium text-[#111827]">{label}</Text>
    </View>
  );
};

export default SectionLabel;
