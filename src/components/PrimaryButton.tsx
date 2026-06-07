import React from 'react';
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  View,
} from 'react-native';

type PrimaryButtonProps = TouchableOpacityProps & {
  title: string;
  Icon?: React.FC<any>;
};

const PrimaryButton = ({
  title,
  Icon,
  disabled,
  ...props
}: PrimaryButtonProps) => {
  return (
    <TouchableOpacity
      className={`bg-primary p-3 rounded-2xl items-center justify-center mb-7 mt-7 mx-6  ${
        disabled ? 'opacity-50' : ''
      }`}
      activeOpacity={0.8}
      disabled={disabled}
      {...props}
    >
      <View className="flex-row items-center gap-2">
        {Icon && <Icon width={24} height={24} color="#FFFFFF" />}

        <Text className="text-white text-lg font-semibold">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
