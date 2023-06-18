import React, {FC} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import {height, moderateScale, width} from '../styles/responsiveSize';

interface LoaderCompInterface {}

const Loader: FC<LoaderCompInterface> = () => {
  return (
    <View style={styles.loaderContainer}>
      <View style={styles.lottieStyle}>
        <ActivityIndicator color={colors.theme} size={'large'} />
        <Text
          style={{
            ...commonStyles.font_14_medium,
            marginTop: moderateScale(20),
          }}>
          Fetching questions...
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    backgroundColor: colors.whiteOpacity50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    height: height,
    width: width,
    zIndex: 200,
  },
  lottieStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(20),
    paddingVertical: moderateScale(24),
    paddingHorizontal: moderateScale(40),
  },
});

export default React.memo(Loader);
