import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// <-- Screens -->
import Dashboard from '../../screens/dashboard/Dashboard';
import SendMoney from '../../screens/sendMoney/SendMoney';

export type MainStackParamList = {
  Dashboard: undefined;
  SendMoney: undefined;
};

const MainStack = createStackNavigator<MainStackParamList>();

function MainNavigation() {
  return (
    <MainStack.Navigator
      initialRouteName="Dashboard"
      screenOptions={({navigation, route}) => ({
        headerShown: true,
        headerTitleAlign: 'left',
      })}>
      <MainStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="SendMoney"
        component={SendMoney}
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  );
}

export default MainNavigation;
