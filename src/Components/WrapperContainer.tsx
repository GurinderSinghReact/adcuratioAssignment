import React, {FC, ReactNode} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import colors from '../styles/colors';
import {moderateScale} from '../styles/responsiveSize';
import MoveToTopBtnComp from './MoveToTopBtnComp';
import Loader from './Loader';

interface WrapperComponentProps {
  children: ReactNode;
  isSafeAreaAvailable: boolean;
  paddingAvailable: boolean;
  mainViewStyle: object;
  isLoading: boolean;
  showMoveToTop: boolean;
  onMoveToTop: () => void;
}

const WrapperContainer: FC<WrapperComponentProps> = ({
  children,
  isSafeAreaAvailable = true,
  paddingAvailable = true,
  mainViewStyle,
  isLoading = false,
  showMoveToTop = false,
  onMoveToTop = () => {},
}) => {
  const styles = externalStyles({paddingAvailable});

  return (
    <View
      style={{
        ...styles.container,
        ...mainViewStyle,
      }}>
      <StatusBar
        animated={true}
        backgroundColor={colors.white}
        barStyle={'dark-content'}
        showHideTransition={'none'}
        hidden={false}
      />
      {isSafeAreaAvailable ? <SafeAreaView /> : <></>}
      {children}
      {isLoading && <Loader />}
      {showMoveToTop && <MoveToTopBtnComp onMoveToTop={onMoveToTop} />}
    </View>
  );
};

const externalStyles = (props: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
      paddingHorizontal: props?.paddingAvailable ? moderateScale(16) : 0,
      zIndex: -2,
    },
  });

export default React.memo(WrapperContainer);
