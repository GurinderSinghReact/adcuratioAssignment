import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import imagePath from '../constants/imagePath';
import navigationStrings from '../constants/navigationStrings';
import {moderateScale, textScale} from '../styles/responsiveSize';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';

type PropsType = {
  isCurrent?: boolean;
  label?: any;
};
export const CustomTabMenuItem = ({label, isCurrent}: PropsType) => {
  const getSelectedImage = () => {
    switch (label) {
      case navigationStrings.REACT_SCREEN:
        return imagePath.selectedReactTab;
      case navigationStrings.REACT_NATIVE_SCREEN:
        return imagePath.selectedReactNativeTab;
      case navigationStrings.NODE_SCREEN:
        return imagePath.selectedNodeTab;
    }
  };

  const getUnselectedImage = () => {
    switch (label) {
      case navigationStrings.REACT_SCREEN:
        return imagePath.unselectedReactTab;
      case navigationStrings.REACT_NATIVE_SCREEN:
        return imagePath.unselectedReactNativeTab;
      case navigationStrings.NODE_SCREEN:
        return imagePath.selectedNodeTab;
    }
  };

  const styles = externalStyles({isCurrent});

  return (
    <View style={styles.imgContainerStyle}>
      <Image
        source={isCurrent ? getSelectedImage() : getUnselectedImage()}
        style={styles.imgStyle}
      />
      <Text style={styles.labelStyle}>{label}</Text>
    </View>
  );
};

const externalStyles = (props: any) =>
  StyleSheet.create({
    imgContainerStyle: {
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: moderateScale(8),
    },
    imgStyle: {
      height: moderateScale(22),
      width: moderateScale(22),
      resizeMode: 'contain',
      tintColor: props.isCurrent ? colors.theme : colors.blackOpacity80,
    },
    labelStyle: {
      fontSize: textScale(12),
      fontFamily: props.isCurrent ? fontFamily.bold : fontFamily.medium,
      paddingTop: moderateScale(4),
      color: props.isCurrent ? colors.theme : colors.blackOpacity80,
    },
  });
