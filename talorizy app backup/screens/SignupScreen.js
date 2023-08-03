import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
import FormInput from '../components/FormInput';
export default function SignupScreen() {
  const[name,setname]=useState('');
  const[number,setnumber]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      
     
      <Text style={styles.text}>screenB </Text> 
          
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    marginTop: 10,
    paddingLeft:8,
    width:"100%",
    paddingLeft:170
  }
});