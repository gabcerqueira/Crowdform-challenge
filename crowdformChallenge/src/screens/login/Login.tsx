import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import DefaultScreenContainer from '../../components/defaultScreenContainer/DefaultScreenContainer';
import {colors} from '../../style/constants/colors';
import {Title} from './style';
import CustomInput from '../../components/input/CustomInput';
import CustomButton from '../../components/button/CustomButton';
import {useAppDispatch} from '../../app/hooks';
import {login} from '../../features/auth/authActions';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '../../navigations/AuthNavigation/AuthNavigation';

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const handleLogin = () => {
    dispatch(
      login({
        email,
        password,
      }),
    );
  };

  const handleSignUpNavigation = () => navigation.navigate('SignUp');

  return (
    <DefaultScreenContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Title>Welcome Back</Title>
          <Text style={{color: colors.text}}>Log in to continue</Text>
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            padding: 20,
          }}>
          <>
            <Image
              source={require('../../assets/loginLock.png')}
              resizeMode="contain"
              style={{
                height: 150,
                width: 150,
              }}
            />
          </>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <CustomInput label={'Email'} value={email} onChangeText={setEmail} />
          <CustomInput
            label={'Password'}
            value={password}
            onChangeText={setPassword}
            secureText={true}
          />
        </KeyboardAvoidingView>
        <Text style={{marginLeft: 'auto', color: colors.textDefault}}>
          Forgot your password ?{' '}
        </Text>

        <View style={{marginVertical: 40}}>
          <CustomButton
            title="Log In"
            onPress={() => handleLogin()}
            disabled={!(email !== '' && password !== '')}
          />
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 20,
              alignSelf: 'center',
            }}>
            <Text style={{color: colors.text}}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => handleSignUpNavigation()}>
              <Text style={{color: colors.primary}}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </DefaultScreenContainer>
  );
};

export default Login;
