import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
import FormInput from '../components/FormInput';
export default function SignupScreen({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      
      <Image
          style={{width: '100%', height: '59%'}}
          source={{uri:'https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?size=338&ext=jpg&ga=GA1.2.1165235848.1672202670&semt=ais'}}
      /> 
      <Text style={styles.text}>REGISRATION PAGE FOR USERS</Text>    
      
      <FormInput
        value={email}
        placeholderText='Email'
        onChangeText={userEmail => setEmail(userEmail)}
        autoCapitalize='none'
        keyboardType='email-address'
        autoCorrect={false}
      />
      <FormInput
        value={password}
        placeholderText='Password'
        onChangeText={userPassword => setPassword(userPassword)}
        keyboardType='numeric'
        secureTextEntry={true}
      />
       <FormButton
        buttonTitle='SIGNUP'
        onPress={() => register(email, password)}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D7BDE2',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 30,
    marginBottom: 10
  }
});