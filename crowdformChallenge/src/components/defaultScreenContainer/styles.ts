import styled from 'styled-components/native';
import {colors} from '../../style/constants/colors';

export const Container = styled.View`
  flex: 1;
`;

export const BarStyle = styled.View`
  height: 50px;
  width: 100%;
  background-color: ${colors.primary};
`;

export const BarStyleRounded = styled.View`
  height: 50px;
  width: 100%;
  background-color: ${colors.ice};
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
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
