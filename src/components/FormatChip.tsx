import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import CheckCircleIcon from '../assets/icons/check_circle.svg';

type FormatChipProps = {
  title: string;
  subtitle: string;
  Icon: React.FC<any>;
  selected?: boolean;
  onPress?: () => void;
};

const FormatChip = ({
  title,
  subtitle,
  Icon,
  selected = false,
  onPress,
}: FormatChipProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className={`relative w-[105px] h-[125px] rounded-[16px] border items-center justify-center px-3
        ${selected ? 'border-[#2563EB] bg-white' : 'border-[#E5E7EB] bg-white'}
      `}
    >
      {selected && (
        <View className="absolute top-1 right-1">
          <CheckCircleIcon width={24} height={24} />
        </View>
      )}

      {/* Icon + Title */}
      <View className="flex-row items-center gap-2">
        <Icon width={30} height={30} color={'#2563EB'} />

        <Text className="text-[18px] font-nunitoBold text-[#1F2937]">
          {title}
        </Text>
      </View>

      {/* Subtitle */}
      <Text className="mt-4 text-center text-[14px] leading-5 text-[#6B7280]">
        {subtitle}
      </Text>
    </TouchableOpacity>
  );
};

export default FormatChip;
