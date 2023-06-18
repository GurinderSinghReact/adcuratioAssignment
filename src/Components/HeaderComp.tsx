import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import {moderateScale, width} from '../styles/responsiveSize';

interface HeaderCompInterface {
  title: string;
}

const HeaderComp: FC<HeaderCompInterface> = ({title = ''}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Hottest {title} Questions</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingVertical: moderateScale(16),
    borderBottomWidth: 0.5,
    borderColor: colors.blackOpacity25,
    width: width,
    marginLeft: -moderateScale(16),
    alignItems: 'center',
  },
  titleStyle: {
    ...commonStyles.font_16_bold,
  },
});

export default React.memo(HeaderComp);
