import React , {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Logo(){
    return(
        <View style={styles.container}>
        <Image
        style={{width: 90, height: 90}}
        source={require('../images/logo.png')}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginVertical : 32,
    },
    logoText: {
        
        fontSize : 20,
        color : 'rgba(255,255,255,0.9)'
    }
  });
  
