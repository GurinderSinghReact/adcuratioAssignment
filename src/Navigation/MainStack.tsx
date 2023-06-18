import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import navigationStrings from '../constants/navigationStrings';
import TabRoutes from './TabRoutes';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <>
      <Stack.Screen name={navigationStrings.TAB_ROUTES} component={TabRoutes} />
    </>
  );
};

export default MainStack;
