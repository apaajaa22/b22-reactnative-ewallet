import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Gap from './Gap';

const InputText = ({title, ...rest}) => {
  const [color, setColor] = useState('#000');
  const onFocus = () => {
    setColor('#4c2a86');
  };
  const onBlur = () => {
    setColor('#000');
  };
  return (
    <View style={styles.wrapperContent}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        onFocus={onFocus}
        onBlur={onBlur}
        style={styles.border(color)}
        placeholder={`Type your ${title}`}
        {...rest}
      />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  wrapperContent: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  title: {
    fontSize: 17,
  },
  border: color => ({
    borderColor: color,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 13,
    marginTop: 10,
    fontSize: 16,
    height: 55,
  }),
});
