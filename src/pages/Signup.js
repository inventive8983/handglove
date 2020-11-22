import React , {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as firebase from 'firebase';



export default class Signup extends React.Component{

    state = {
        name: "",
        phoneNumber: "",
        email: "",
        password: ""
    }
    static navigationOptions = {
        title: "Sign Up"
    }
    userSignUp(email, pass){
        console.log(email, pass)
        firebase.auth().createUserWithEmailAndPassword(email.toString().trim(), pass).then((res) => {
            var user = firebase.auth().currentUser;
            if(user){
            user.updateProfile({
                displayName: this.state.name,
                phoneNumber: this.state.phoneNumber
            }).then(
                (s)=> this.props.navigation.replace("Detailsform")
            ).catch(async error => {
                await user.delete()
                Alert.alert(error.message)
            })
            }
        }).catch(error => {
            Alert.alert(error.message)
        })
    }
    render(){
    return(
        <View style={styles.container}>
            <Text style={styles.signupText}>Sign Up</Text>
            <TextInput style={styles.inputBox} 
            onChangeText={(text) => {
                this.setState({name:text})
            }}
            placeholder="Name"
            placeholderTextColor='rgba(255,255,255,0.5)'
            />
            <TextInput style={styles.inputBox} 
            onChangeText={(text) => {
                this.setState({phoneNumber:text})
            }}
            placeholder="Phone Number"
            placeholderTextColor='rgba(255,255,255,0.5)'
            />
            <TextInput style={styles.inputBox} 
            onChangeText={(text) => {
                this.setState({email:text})
            }}
            placeholder="Email"
            placeholderTextColor='rgba(255,255,255,0.5)'
            />
            <TextInput style={styles.inputBox} 
            onChangeText={(text) => {
                this.setState({password:text})
            }}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor='rgba(255,255,255,0.5)'
            />
            <TouchableOpacity 
                style={styles.button}
                onPress={() => {
                    console.log(this.state.email)
                    this.userSignUp(this.state.email,this.state.password);
                }}
                >
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
            {/* <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                    navigation.navigate("Detailsform");
                }}
                >
                <Text style={styles.signupbuttonText}>Detailsform</Text>
                </TouchableOpacity>  
            </View> */}
        </View>
    )
}
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
    button: {
        width:350,
        backgroundColor:'#fff',
        borderRadius: 12,
        marginVertical: 25,
        paddingHorizontal: 16,
        paddingVertical: 16,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'rgba(0,0,0,0.8)'
    },
    signupTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginVertical: 16,
        flexDirection: 'row'
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
    signupText: {
        color: '#ffffff',
        textAlign: "left",
        fontSize: 48,
        marginVertical: 15
    }
  });
