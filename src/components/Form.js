import React , {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Form({navigation}){

    return(
        <View style={styles.container}>
            <TextInput style={styles.inputBox} 
            placeholder="Moblie Number"
            placeholderTextColor='rgba(255,255,255,0.5)'
            />
            <TextInput style={styles.inputBox} 
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor='rgba(255,255,255,0.5)'
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputBox: {
        width:350,
        backgroundColor:'rgba(255,255,255,0.6)',
        borderRadius: 25,
        paddingHorizontal: 16,
        paddingVertical: 10,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10,
    },
    button: {
        width:350,
        backgroundColor:'#102027',
        borderRadius: 25,
        marginVertical: 10,
        paddingHorizontal: 16,
        paddingVertical: 10,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'rgba(255,255,255,0.8)'
    }
  });
