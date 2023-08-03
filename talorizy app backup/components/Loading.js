import React from 'react';
import { View, ActivityIndicator, StyleSheet,Image,Text } from 'react-native';
export default function Loading() {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size='large' color='#6646ee' />
      
      <Text
        style={styles.text}> WELCOME TO TALORZY APPLICATON</Text>
       <Image
          style={{width: '100%', height: '50%'}}
          source={{uri:'https://st3.depositphotos.com/11433342/15212/i/450/depositphotos_152127244-stock-photo-set-of-sewing-supplies.jpg'}}
      />  
    
    </View>
  );
}
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});