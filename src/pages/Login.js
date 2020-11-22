import React , {useState} from 'react';
import { StyleSheet, Text,TextInput, View, TouchableOpacity, onPress, Alert } from 'react-native';
import * as firebase from 'firebase';
import Logo from '../components/Logo';
import Form from '../components/Form';
import { NavigationContainer } from '@react-navigation/native';

export default function Login({navigation}){

    const [email, setMail] = React.useState("");
    const [pass, setPass] = React.useState("");

    const login = () => {
        firebase.auth().signInWithEmailAndPassword(email, pass).then((user) => {
            navigation.replace("Readings")
        }).catch(error => {
            Alert.alert(error.message)
        })
    }

    return(
        <View style={styles.container}>
            <Logo/>
            <TextInput style={styles.inputBox} 
            placeholder="Email"
            onChangeText={(text) => {
                setMail(text)
            }}
            placeholderTextColor='rgba(255,255,255,0.5)'
            />
            <TextInput style={styles.inputBox} 
            placeholder="Password"
            onChangeText={(text) => {
                setPass(text)
            }}
            secureTextEntry={true}
            placeholderTextColor='rgba(255,255,255,0.5)'
            />
            <View>
                <TouchableOpacity
                    style={styles.buttonx}
                    onPress={() => {
                    login()
                }}
                >
                <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>  
            </View>
            <View style={styles.signupTextCont}>
                <Text style={styles.signupText}>Don't have an account yet?</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                    navigation.navigate("Signup");
                }}
                >
                <Text style={styles.signupbuttonText}>SignUp</Text>
                </TouchableOpacity>    
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputBox: {
        width:350,
        backgroundColor:'rgba(255,255,255,0.05)',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10,
    },
    signupTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginVertical: 16,
        flexDirection: 'row',
        borderRadius: 4
    },
    signupText: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16
    },
    signupButton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500'
    },
    button: {
        width:100,
        backgroundColor:'#000',
        borderRadius: 25,
        marginHorizontal: 5,
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    signupbuttonText: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 16
    },
    buttonx: {
        backgroundColor:'#fff',
        borderRadius: 12,
        marginVertical: 10,
        paddingHorizontal: 48,
        paddingVertical: 16,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'rgba(0,0,0,0.8)',
    }
  });
