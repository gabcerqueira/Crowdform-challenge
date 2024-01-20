import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DefaultScreenContainer from '../../components/defaultScreenContainer/DefaultScreenContainer';

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <DefaultScreenContainer>
      <Text>Dashboard</Text>
    </DefaultScreenContainer>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
