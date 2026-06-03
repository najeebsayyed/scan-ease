import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ArrowBackIcon from '../assets/icons/arrow_back.svg';
import type { NavigationProp } from '@react-navigation/native';

type ScreenHeaderProps = {
  title: string;
  classname?: string;
  titleStyle?: string;
  showBack?: boolean;
};

const ScreenHeader = ({
  title,
  classname = '',
  titleStyle = '',
  showBack = true,
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
      className={`pt-12 pb-2  flex-row items-center justify-between ${classname}`}
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

      {/* Right Spacer */}
      <View className="w-8" />
    </View>
  );
};

export default ScreenHeader;
