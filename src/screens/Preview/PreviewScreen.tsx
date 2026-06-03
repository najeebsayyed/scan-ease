import React, { useState } from 'react';
import { View, Image } from 'react-native';

import ScreenHeader from '../../components/ScreenHeader';
import FormatChip from '../../components/FormatChip';
import PrimaryButton from '../../components/PrimaryButton';
import SectionLabel from '../../components/SectionLabel';

import PdfIcon from '../../assets/icons/pdf.svg';
import JpgIcon from '../../assets/icons/jpg.svg';
import PngIcon from '../../assets/icons/png.svg';
import DownloadIcon from '../../assets/icons/download.svg';

export default function PreviewScreen({ route }) {
  const { scannedImages } = route.params;

  const [selectedFormat, setSelectedFormat] = useState('PDF');
  const [selectedPage, setSelectedPage] = useState(0);

  return (
    <View className="flex-1 px-3">
      <ScreenHeader title="Preview" />

      <View className="h-[40%] w-full mt-5 rounded-3xl self-center bg-primary justify-center">
        <Image
          source={{ uri: scannedImages[selectedPage] }}
          className="h-[95%] w-[95%] rounded-xl self-center"
          resizeMode="contain"
        />
      </View>

      <View className="items-center mt-4">
        <View className="w-full">
          <SectionLabel label="Save as:" />
        </View>

        <View className="flex-row gap-3">
          <FormatChip
            title="PDF"
            subtitle="Best for documents"
            Icon={PdfIcon}
            selected={selectedFormat === 'PDF'}
            onPress={() => setSelectedFormat('PDF')}
          />

          <FormatChip
            title="JPG"
            subtitle="Best for images"
            Icon={JpgIcon}
            selected={selectedFormat === 'JPG'}
            onPress={() => setSelectedFormat('JPG')}
          />

          <FormatChip
            title="PNG"
            subtitle="High quality images"
            Icon={PngIcon}
            selected={selectedFormat === 'PNG'}
            onPress={() => setSelectedFormat('PNG')}
          />
        </View>

        <View className="w-full mt-6">
          <PrimaryButton title="Save Document" Icon={DownloadIcon} />
        </View>
      </View>
    </View>
  );
}
