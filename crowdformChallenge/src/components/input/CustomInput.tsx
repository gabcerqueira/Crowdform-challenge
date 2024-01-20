import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../style/constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  inputStyle?: TextStyle;
  secureText?: boolean;
}

const CustomInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureText = false,
}: Props) => {
  const [securePasswordText, setSecurePasswordText] = useState(secureText);

  const toggleSecureText = () => {
    setSecurePasswordText(!securePasswordText);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#A0A0A0"
          secureTextEntry={securePasswordText}
        />
        {secureText && (
          <TouchableOpacity onPress={toggleSecureText} style={styles.eyeIcon}>
            <Icon
              name={securePasswordText ? 'eye-slash' : 'eye'}
              size={24}
              color={colors.text}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    color: colors.textDefault,
    marginLeft: 10,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    paddingLeft: 10,
  },
  input: {
    height: 40,
    flex: 1,
    color: colors.text,
  },
  eyeIcon: {
    padding: 10,
  },
});

export default CustomInput;
