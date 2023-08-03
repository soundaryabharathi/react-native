import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TextInput,ScrollView } from 'react-native';
import { useState } from 'react/cjs/react.development';
import { ref, set, update, onValue, remove } from "firebase/database";
import { db } from './conf'
import FormButton from '../components/formbuttons'
import { AuthContext } from '../navigation/AuthProvider';
export default function HomeScreen() {
  const { user, logout } = useContext(AuthContext);
  const [cusno, setno] = useState('');
   const[shopname,settalor]=useState('');
  const[cusadd,setadd]=useState('');
  const [cusname, setcus] = useState('');

  function createData() {

    // const newKey = push(child(ref(database), 'users')).key;

    set(ref(db, 'shopname' + shopname ), {
      cusname:cusname,
        cusno: cusno,
       
        cusadd:cusadd
      
    }).then(() => {
      // Data saved successfully!
      alert('data send to the tailors!');
    })
      .catch((error) => {
        // The write failed...
        alert(error);
      });
  }


  function update() {

    // const newKey = push(child(ref(database), 'users')).key;

    set(ref(db, 'talorname' + talorname), {

      
    }).then(() => {
      // Data saved successfully!
      alert('data updated!');
    })
      .catch((error) => {
        // The write failed...
        alert(error);
      });
  }
  

  function deleteData() {

    remove(ref(db, 'shopname' + shopname), {
        cusno: cusno,
        cusadd:cusadd,
        cusname:cusname
     
    
    })
    alert('data deleted');
  }

  return (

    <View style={styles.container}>
     
  
     <Image
        style={{ width: '8%', height: '4%' }}
        source={{ uri: 'https://media.istockphoto.com/id/1018739074/vector/power-turn-off-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=VbwdvU0oVPP2vPDqLod2AWi5Gws6QwALYzZ6bV0oYSc=' }}
      />

      <FormButton buttonTitle='                                                                  LOGOUT' style={styles.button} onPress={() => logout()} />
<Image
        style={{ width: '100%', height: '43%' }}
        source={{ uri: 'https://img.freepik.com/free-vector/audience-segmentation-abstract-concept-illustration_335657-1854.jpg?size=338&ext=jpg&ga=GA1.2.1165235848.1672202670&semt=sph' }}
      />
 


     

<ScrollView>
      <View style={styles.inputView}>

      </View>
        <TextInput value={shopname} onChangeText={(shopname) => { settalor(shopname) }} placeholder="Name of the shop name"  style={styles.TextInput}></TextInput>
      <TextInput value={cusname} onChangeText={(cusname) => { setcus(cusname) }} placeholder="Customername, Customerdetails  are send to the Talor database              "  style={styles.TextInput}></TextInput>
      
      <TextInput value={cusno} onChangeText={(cusno) => { setno(cusno) }} placeholder="Customerphonenumber" keyboardType='phone-pad' style={styles.TextInput}></TextInput>
      <TextInput value={cusadd} onChangeText={(cusadd) => { setadd(cusadd) }} placeholder="Customeraddress"  style={styles.TextInput}></TextInput>
      
      </ScrollView>
      <FormButton buttonTitle='SEND TO THE TALORS' onPress={() => createData()} />
      <FormButton buttonTitle='DELETE' onPress={() => deleteData()} />
   

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#85C1E9'
  },
  text: {
    fontSize: 15,
    color: '#CA03A2',
    paddingRight: 20
  },
  inputView: {
    width: '100%',
    marginBottom: 8,
    paddingBottom: 20,
    alignSelf: "center",
    borderColor: "#ccc",
  },
  TextInput: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 4,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  }
});

