import React, { useState } from 'react';
import { View, Image, Alert } from 'react-native';

import ScreenHeader from '../../components/ScreenHeader';
import FormatChip from '../../components/FormatChip';
import PrimaryButton from '../../components/PrimaryButton';
import SectionLabel from '../../components/SectionLabel';

import PdfIcon from '../../assets/icons/pdf.svg';
import JpgIcon from '../../assets/icons/jpg.svg';
import PngIcon from '../../assets/icons/png.svg';
import DownloadIcon from '../../assets/icons/download.svg';

import ImageResizer from '@bam.tech/react-native-image-resizer';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import { PDFDocument } from 'pdf-lib';
import RNFS from 'react-native-fs';
import { Buffer } from 'buffer';

globalThis.Buffer = Buffer;

export default function SaveDocument({ route }) {
  const { scannedImages } = route.params;

  const [selectedFormat, setSelectedFormat] = useState('PDF');
  const [selectedPage, setSelectedPage] = useState(0);

  const handleSave = async () => {
    try {
      let savedFormat = '';

      if (selectedFormat === 'JPG') {
        await CameraRoll.save(scannedImages[selectedPage], {
          type: 'photo',
          album: 'DocScanner',
        });

        savedFormat = 'JPG';
      }

      if (selectedFormat === 'PNG') {
        const pngImage = await ImageResizer.createResizedImage(
          scannedImages[selectedPage],
          2000,
          2000,
          'PNG',
          100,
        );

        await CameraRoll.save(pngImage.uri, {
          type: 'photo',
          album: 'DocScanner',
        });

        savedFormat = 'PNG';
      }

      if (selectedFormat === 'PDF') {
        const pdfDoc = await PDFDocument.create();

        for (const imageUri of scannedImages) {
          console.log('Processing:', imageUri);

          const imagePath = imageUri.replace('file://', '');

          const imageBase64 = await RNFS.readFile(imagePath, 'base64');

          const imageBytes = Buffer.from(imageBase64, 'base64');

          let embeddedImage;

          if (imageUri.toLowerCase().includes('.png')) {
            embeddedImage = await pdfDoc.embedPng(imageBytes);
          } else {
            embeddedImage = await pdfDoc.embedJpg(imageBytes);
          }

          const width = embeddedImage.width;
          const height = embeddedImage.height;

          const page = pdfDoc.addPage([width, height]);

          page.drawImage(embeddedImage, {
            x: 0,
            y: 0,
            width,
            height,
          });
        }

        const pdfBytes = await pdfDoc.save();

        const pdfPath = `${
          RNFS.DownloadDirectoryPath
        }/DocScanner_${Date.now()}.pdf`;

        await RNFS.writeFile(
          pdfPath,
          Buffer.from(pdfBytes).toString('base64'),
          'base64',
        );

        Alert.alert('PDF Saved', `PDF saved successfully.\n\n${pdfPath}`);

        return;
      }

      Alert.alert(
        'Saved Successfully',
        `Document saved as ${savedFormat} in gallery.`,
      );
    } catch (error) {
      console.log('PDF ERROR:', error);
      console.log('PDF ERROR STRING:', JSON.stringify(error));

      Alert.alert('Save Failed', error?.message || 'Unable to save document.');
    }
  };

  return (
    <View className="flex-1 px-3">
      <ScreenHeader title="Save Document" />

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
          <PrimaryButton
            title="Save Document"
            Icon={DownloadIcon}
            onPress={handleSave}
          />
        </View>
      </View>
    </View>
  );
}
