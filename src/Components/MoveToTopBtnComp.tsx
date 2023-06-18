import React, {FC} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../styles/colors';
import {moderateScale} from '../styles/responsiveSize';
import imagePath from '../constants/imagePath';

interface MoveToTopBtnCompInterface {
  onMoveToTop: () => void;
}

const MoveToTopBtnComp: FC<MoveToTopBtnCompInterface> = ({onMoveToTop}) => {
  return (
    <TouchableOpacity
      style={styles.btnStyle}
      activeOpacity={1}
      onPress={onMoveToTop}>
      <Image
        source={imagePath.moveUpArrow}
        style={{
          tintColor: colors.white,
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: colors.theme,
    height: moderateScale(50),
    width: moderateScale(50),
    borderRadius: moderateScale(50),
    position: 'absolute',
    right: 10,
    alignItems: 'center',
    bottom: 100,
  },
});

export default React.memo(MoveToTopBtnComp);
