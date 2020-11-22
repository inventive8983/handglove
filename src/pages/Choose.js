import React , {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, onPress } from 'react-native';

export default function Login({navigation}){

    return(
        <View style={styles.container}>
            <View style={styles.signupTextCont}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                    navigation.navigate("Detailsform");
                }}
                >
                <Text style={styles.signupbuttonText}>New Patient</Text>
                </TouchableOpacity>    
            </View>
            <View style={styles.signupTextCont}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                    navigation.navigate("Readings");
                }}
                >
                <Text style={styles.signupbuttonText}>Existing Patient</Text>
                </TouchableOpacity>    
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#37474f',
      alignItems: 'center',
      justifyContent: 'center',
    },
    signupTextCont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 50,
        flexDirection: 'row'
    },
    button: {
        width:200,
        backgroundColor:'#102027',
        borderRadius: 25,
        marginHorizontal: 5,
        paddingHorizontal: 16,
        paddingVertical: 10,
        alignItems: 'center',
    },
    signupbuttonText: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 16
    }
  });
