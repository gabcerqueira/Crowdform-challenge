import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {colors} from '../../style/constants/colors';

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const CustomButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  disabled = false,
  containerStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        containerStyle,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  disabled: {
    backgroundColor: colors.secondary,
  },
});

export default CustomButton;
