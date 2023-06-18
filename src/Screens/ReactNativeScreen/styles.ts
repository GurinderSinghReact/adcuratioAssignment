import {StyleSheet} from 'react-native';
import {moderateScale} from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
  },
  listFooterStyle: {height: moderateScale(60), justifyContent: 'center'},
  flatListContainer: {
    paddingBottom: moderateScale(60),
    paddingTop: moderateScale(10),
  },
});

export default styles;
