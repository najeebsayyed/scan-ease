import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NavigationProp } from '@react-navigation/native';

import ArrowBackIcon from '../assets/icons/arrow_back.svg';

type ScreenHeaderProps = {
  title: string;
  classname?: string;
  titleStyle?: string;
  showBack?: boolean;
  RightIcon?: React.ComponentType<any>;
  onRightPress?: () => void;
};

const ScreenHeader = ({
  title,
  classname = '',
  titleStyle = '',
  showBack = true,
  RightIcon,
  onRightPress,
}: ScreenHeaderProps) => {
  const navigation =
    useNavigation<NavigationProp<Record<string, object | undefined>>>();

  const handleBackPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View
      className={`pt-12 pb-2 flex-row items-center justify-between ${classname}`}
    >
      {/* Left */}
      <View className="w-8">
        {showBack && (
          <TouchableOpacity onPress={handleBackPress}>
            <ArrowBackIcon />
          </TouchableOpacity>
        )}
      </View>

      {/* Center */}
      <Text
        className={`flex-1 text-center text-xl text-[#111827] ${titleStyle}`}
      >
        {title}
      </Text>

      {/* Right */}
      <View className="w-8 items-end">
        {RightIcon && (
          <TouchableOpacity onPress={onRightPress}>
            <RightIcon width={30} height={30} color={'#000000'} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default ScreenHeader;
