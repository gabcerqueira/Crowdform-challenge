import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// <-- Screens -->
import Dashboard from '../../screens/dashboard/Dashboard';
import SendMoney from '../../screens/sendMoney/SendMoney';
import {colors} from '../../style/constants/colors';
import {useAppSelector} from '../../app/hooks';
import {selectUser} from '../../features/auth/authSelectors';
import {Text, View} from 'react-native';

export type MainStackParamList = {
  Dashboard: undefined;
  SendMoney: undefined;
};

const MainStack = createStackNavigator<MainStackParamList>();

function MainNavigation() {
  const user = useAppSelector(selectUser);

  return (
    <MainStack.Navigator
      initialRouteName="Dashboard"
      screenOptions={({navigation, route}) => ({
        headerShown: true,
        headerTitleAlign: 'center',
      })}>
      <MainStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: true,

          headerStyle: {
            backgroundColor: colors.primary,

            height: 120,
          },
          headerTintColor: colors.ice,
          headerTitle: () => (
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{textAlign: 'center', color: colors.ice, fontSize: 14}}>
                Current Account
              </Text>
              <Text
                style={{textAlign: 'center', color: colors.ice, fontSize: 24}}>
                ${user?.account.balance}
              </Text>
            </View>
          ),
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
