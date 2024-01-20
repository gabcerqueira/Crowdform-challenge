import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DefaultScreenContainer from '../../components/defaultScreenContainer/DefaultScreenContainer';
import {Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CustomButton from '../../components/button/CustomButton';
import {colors} from '../../style/constants/colors';

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <DefaultScreenContainer height={70}>
      <Text>Dashboard</Text>
      <View style={{position: 'absolute', top: -100, zIndex: 10}}>
        <Image source={require('../../assets/1card.png')} />
      </View>
      <ScrollView style={{paddingTop: 100}}>
        <CustomButton
          title={'Send Money'}
          onPress={function (): void {
            throw new Error('Function not implemented.');
          }}
          type="secondary"
          textStyle={{color: colors.text}}
        />
      </ScrollView>
    </DefaultScreenContainer>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
