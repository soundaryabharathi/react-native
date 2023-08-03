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
    marginTop: 10,
    width: windowWidth / 4,
    height: windowHeight / 25,
    backgroundColor: '#E985D5',
    padding: -20,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 18
  },
  buttonContainers: {
  marginBottom: 10,
  marginBottom:-9,
 
  paddingleft:80,
  
},

button:{
  paddingleft:90,
  color:'#FFFFFF'
},
  
buttonText: {
  fontSize: 20,
  color: '#FFFFFF'
}
});
