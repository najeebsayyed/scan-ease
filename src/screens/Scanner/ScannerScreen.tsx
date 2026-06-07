import React, { useCallback } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import DocumentScanner from 'react-native-document-scanner-plugin';

export default function ScannerScreen() {
  const navigation = useNavigation();

  const scanDocument = async () => {
    try {
      const result = await DocumentScanner.scanDocument();

      if (result?.scannedImages?.length > 0) {
        navigation.navigate('Save', {
          scannedImages: result.scannedImages,
        });
      } else {
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log(error);
      navigation.navigate('Home');
    }
  };

  useFocusEffect(
    useCallback(() => {
      scanDocument();
    }, []),
  );

  return null;
}
