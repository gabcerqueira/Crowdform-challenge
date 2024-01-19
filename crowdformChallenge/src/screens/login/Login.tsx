import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DefaultScreenContainer from '../../components/defaultScreenContainer/DefaultScreenContainer';

type Props = {};

const Login = (props: Props) => {
  return (
    <DefaultScreenContainer>
      <Text>Login</Text>
    </DefaultScreenContainer>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    borderTopRightRadius: 30,
  },
});
