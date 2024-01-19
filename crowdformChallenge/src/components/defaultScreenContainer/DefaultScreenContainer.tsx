import {StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';
import {BarStyle, BarStyleRounded, BarsContainer, Container} from './styles';

type Props = {
  children: ReactNode;
};

const DefaultScreenContainer = ({children}: Props) => {
  return (
    <Container>
      <BarsContainer>
        <BarStyle />
        <BarStyleRounded />
      </BarsContainer>

      {children}
    </Container>
  );
};

export default DefaultScreenContainer;

const styles = StyleSheet.create({});
