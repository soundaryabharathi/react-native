import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TextInput ,ScrollView,Button } from 'react-native';
import { useState } from 'react/cjs/react.development';
import { ref, set, update, onValue, remove } from "firebase/database";
import { db } from './conf'
import FormButton from '../components/formbuttons'
import { AuthContext } from '../navigation/AuthProvider';

export default function HomeScreen() {
  const { user, logout } = useContext(AuthContext);
  
  return (

    <View style={styles.container}>
        <FormButton buttonTitle='LOGIN' onPress={() => logout()}/>
     <Image
          style={{width: '20%', height: '35%',alignSelf: 'center'}}
          source={{uri:'https://t0.gstatic.com/images?q=tbn:ANd9GcTYuzSVNmh8YW-icDxUHWkDftEHMKaP8zOJTyLl_1AzPEGkXT3r'}}
      />
     
      <Image
          style={{width: '20%', height: '10%',alignSelf: 'flex-start'}}
          source={{uri:'https://igimages.gumlet.io/hindi/gallery/movies/sachin-abilliondreams/sachin_poster.jpg?w=240&dpr=1.0'}}
      /> 
       <FormButton buttonTitle='                                                                 LOGOUT' style={styles.textttt} onPress={() => logout()} />
        <Text style={styles.texts}>MOVIE NAME:SACHIN</Text>
     <Text style={styles.texts}>RATING:5</Text>
    <Image
          style={{width: '20%', height: '10%',alignSelf: 'flex-end'}}
          source={{uri:'https://igimages.gumlet.io/hindi/gallery/movies/raabta/raaabta_poster.jpg?w=240&dpr=1.0'}}
      /> 
      <Text style={styles.textt}>MOVIE NAME:RABATA</Text>
     <Text style={styles.textt}>RATING:3</Text>
      <Image
          style={{width: '20%', height: '10%',alignSelf: 'flex-start'}}
          source={{uri:'https://igimages.gumlet.io/hindi/gallery/movies/tubelight/tubelight_poster.jpg?w=240&dpr=1.0'}}
      /> 
      
      <Text style={styles.text}>MOVIE NAME:TUBLIGHT</Text>
     <Text style={styles.text}>RATING:2</Text>
      <Image
          style={{width: '20%', height: '10%',alignSelf: 'flex-end',}}
          source={{uri:'https://igimages.gumlet.io/hindi/gallery/movies/jaggajasoos/jagaajasoos_poster.jpg?w=240&dpr=1.0'}}
      /> 
      <Text style={styles.textt}>MOVIE NAME:JASSOS</Text>
     <Text style={styles.textt}>RATING:1</Text>
     <Text style={styles.texts}>MOVIE NAME:DEWANA</Text>
     <Text style={styles.texts}>RATING:4</Text>
       <Image
          style={{width: '20%', height: '9%',alignSelf: 'flex-start'}}
          source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiQrik6uuE_PLMWe92JUsMxhaRrpNvr8NJqg&usqp=CAU'}}
      /> 
 
       
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    marginTop:-450
  },
  text: {
    fontSize: 15,
    color: '#FFFFFF',
    paddingRight: 260
  },
  texts: {
    fontSize: 15,
    color: '#FFFFFF',
    paddingRight: 269,

  },
  textt: {
    fontSize: 15,
    color: '#FFFFFF',
    paddingLeft: 264
  },
  texttt: {
    fontSize: 85,
    color: '#FFFFFF',
    paddingLeft: 240
  },

  inputView: {
    width: '10%',
    marginBottom: 1,
    paddingBottom: 1,
    alignSelf: "center",
    borderColor: "#ccc",
  },

  TextInput: {
    width: '100%',
    marginBottom: 1,
    paddingBottom: 1,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  }
});

