import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StyleSheet, View} from 'react-native';
import * as ScreenName from '../Screens';
import navigationStrings from '../constants/navigationStrings';
import {CustomTabBar} from '../Components/CustomTabBar';
import colors from '../styles/colors';

export default function TabRoutes() {
  const Tab = createBottomTabNavigator();
  const insets = useSafeAreaInsets();
  const tabBarComp = (props: BottomTabBarProps) => <CustomTabBar {...props} />;

  return (
    <View style={styles.tabBarStyle}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={tabBarComp}>
        <Tab.Screen
          name={navigationStrings.REACT_SCREEN}
          component={ScreenName.ReactScreen}
        />
        <Tab.Screen
          name={navigationStrings.REACT_NATIVE_SCREEN}
          component={ScreenName.ReactNativeScreen}
        />
        <Tab.Screen
          name={navigationStrings.NODE_SCREEN}
          component={ScreenName.NodeScreen}
        />
      </Tab.Navigator>
      {insets.bottom > 0 && (
        <View
          style={{
            height: insets.bottom - 5,
            backgroundColor: colors.white,
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {flex: 1, position: 'relative'},
});
