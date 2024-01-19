import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// <-- Screens -->
import Login from '../../screens/login/Login';
import SignUp from '../../screens/signUp/SignUp';

export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

function AuthNavigation() {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={({navigation, route}) => ({
        headerShown: true,
        headerTitleAlign: 'left',
      })}>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
}

export default AuthNavigation;
