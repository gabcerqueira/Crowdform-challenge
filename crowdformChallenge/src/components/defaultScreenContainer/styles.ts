import styled from 'styled-components/native';
import {colors} from '../../style/constants/colors';

export const Container = styled.View`
  flex: 1;
`;

export const BarStyle = styled.View`
  height: 30px;
  width: 100%;
  background-color: ${colors.primary};
`;

export const BarStyleRounded = styled.View`
  height: 30px;
  width: 100%;
  background-color: ${colors.ice};
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  position: absolute;
  top: 0;
`;

export const BarsContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

export const ScreenContainer = styled.View`
  flex: 1;
  padding: 30px 20px 0;
`;
