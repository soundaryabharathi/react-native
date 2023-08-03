import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';
export default function FormButton({ buttonTitle, ...rest }) {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  
    buttonContainer: {
      marginTop: 15,
      width: windowWidth / 1.1,
      height: windowHeight / 11,
      backgroundColor:'#FF7D65',
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 9
  },
  buttonText: {
    fontSize: 28,
    color:'#FFFFF'
  },
  texttt: {
    fontSize: 85,
    color: '#FFFFFF',
    paddingLeft: 230
  },
});