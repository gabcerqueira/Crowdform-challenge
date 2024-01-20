import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import DefaultScreenContainer from '../../components/defaultScreenContainer/DefaultScreenContainer';
import {Title} from '../login/style';
import {colors} from '../../style/constants/colors';
import CustomInput from '../../components/input/CustomInput';
import {UserRegistration} from '../../models/user/UserRegistration';
import CustomButton from '../../components/button/CustomButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '../../navigations/AuthNavigation/AuthNavigation';
import {useAppDispatch} from '../../app/hooks';
import {createAccount} from '../../features/auth/authActions';
import {CheckBox} from 'react-native-elements';

type Props = {};

const SignUp = (props: Props) => {
  const {control, handleSubmit, setValue} = useForm<UserRegistration>();
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const dispatch = useAppDispatch();
  const [isChecked, setChecked] = useState(false);
  const onSubmit = (data: UserRegistration) => {
    console.log(data);

    dispatch(createAccount(data));
    navigation.navigate('Login');
  };

  const handleLoginNavigation = () => navigation.navigate('Login');

  const handleCheckBoxToggle = () => {
    setChecked(!isChecked);
  };
  return (
    <DefaultScreenContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingVertical: 0}}>
        <View>
          <Title>Create an account</Title>
          <Text style={{color: colors.text}}>
            Add your personal details below
          </Text>
        </View>
        <View style={{paddingVertical: 20}}>
          <Controller
            control={control}
            render={({field}) => (
              <CustomInput
                label={'First name'}
                value={field.value}
                onChangeText={text => {
                  setValue('firstName', text);
                  field.onChange(text);
                }}
              />
            )}
            name="firstName"
            defaultValue=""
          />
          <Controller
            control={control}
            render={({field}) => (
              <CustomInput
                label={'Last name'}
                value={field.value}
                onChangeText={text => {
                  setValue('lastName', text);
                  field.onChange(text);
                }}
              />
            )}
            name="lastName"
            defaultValue=""
          />
          <Controller
            control={control}
            render={({field}) => (
              <CustomInput
                label={'Email'}
                value={field.value}
                onChangeText={text => {
                  setValue('email', text);
                  field.onChange(text);
                }}
              />
            )}
            name="email"
            defaultValue=""
          />
          <Controller
            control={control}
            render={({field}) => (
              <CustomInput
                label={'Password'}
                value={field.value}
                onChangeText={text => {
                  setValue('password', text);
                  field.onChange(text);
                }}
                secureText
              />
            )}
            name="password"
            defaultValue=""
          />
          <View
            style={{
              flexDirection: 'row',

              alignItems: 'center',
            }}>
            <CheckBox
              title=""
              checked={isChecked}
              onPress={handleCheckBoxToggle}
              size={30}
              checkedColor={colors.primary}
              containerStyle={{padding: 0}}
            />
            <View style={{flexWrap: 'wrap'}}>
              <Text style={{color: colors.text}}>
                By creating an account your agree to our
              </Text>
              <Text style={{color: colors.primary}}>Term and Condtions</Text>
            </View>
          </View>
        </View>
        <CustomButton
          title="Submit"
          onPress={handleSubmit(onSubmit)}
          disabled={!isChecked}
        />
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 20,
            alignSelf: 'center',
          }}>
          <Text style={{color: colors.text}}>Don't have an account ? </Text>
          <TouchableOpacity onPress={() => handleLoginNavigation()}>
            <Text style={{color: colors.primary}}>Log in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </DefaultScreenContainer>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
