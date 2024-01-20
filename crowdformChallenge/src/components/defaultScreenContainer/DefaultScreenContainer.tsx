import {StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';
import {
  BarStyle,
  BarStyleRounded,
  BarsContainer,
  Container,
  ScreenContainer,
} from './styles';

type Props = {
  children: ReactNode;
  height?: number;
};

const DefaultScreenContainer = ({children, height = 30}: Props) => {
  return (
    <Container>
      <BarsContainer>
        <BarStyle height={height} />
        <BarStyleRounded height={height} />
      </BarsContainer>
      <ScreenContainer>{children}</ScreenContainer>
    </Container>
  );
};

export default DefaultScreenContainer;

const styles = StyleSheet.create({});
