import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import { AuthContext } from '../navigation/AuthProvider';
export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const [state, setState] = useState({
      email: "",
      emailError: "",
      password: "",
    });
    const emailValidator = () => {
      if (state.email == "") {
        setState({ emailError: "Email Field canot be empty" });
      } else {
        setState({ emailError: "" });
      }
    };
    return (
      <View style={styles.container}>
          
       

        <Text style={styles.text}>ScreenA</Text>
        
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={styles.navButtonText}>SCREENB</Text>
         </TouchableOpacity>  
       
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
      marginBottom: 10,
      width:"100%",
      paddingLeft:170
    },
    navButton: {
      marginTop: 15
    },
    navButtonText: {
      fontSize: 23,
      color: '#FFC0CB'
    }
  });