import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import { AuthContext } from '../navigation/AuthProvider';
export default function LoginScreen({navigation}) {
    const [taloremail, setEmail] = useState('');
    const [talorpassword, setPassword] = useState('');
    const { login } = useContext(AuthContext);

    return (
      <View style={styles.container}>
        <Image
          style={{width: '100%', height: '50%'}}
          source={{uri:'https://img.freepik.com/free-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-login-password-safety-measures_335657-3530.jpg?size=338&ext=jpg&ga=GA1.2.1165235848.1672202670&semt=ais'}}
      />  

        <Text style={styles.text}>USERS LOGIN</Text>
        <FormInput
          value={taloremail}
          placeholderText='Email'
          onChangeText={userEmail => setEmail(userEmail)}
          autoCapitalize='none'
          keyboardType='email-address'
          autoCorrect={false}
        />
        <FormInput
          value={talorpassword}
          placeholderText='Password'
          onChangeText={userPassword => setPassword(userPassword)}
          keyboardType='numeric'
          secureTextEntry={true}
        />
          <FormButton buttonTitle='LOGIN' onPress={() => login(taloremail, talorpassword)} />
       
      
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('userRegistration')}
        >
          <Text style={styles.navButtonText}>New user? Join here</Text>
         </TouchableOpacity>  
      
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
    },
    navButton: {
      marginTop: 15
    },
    navButtonText: {
      fontSize: 23,
      color: '#6646ee'
    }
  });