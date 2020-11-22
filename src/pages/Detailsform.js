import React , {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import * as firebase from 'firebase';

var gender= [
    {label: "Female", value: 0},
    {label: "Male", value: 1},
    {label: "Other", value: 2},
];
var sportsback= [
    {label: "Yes", value: 0},
    {label: "No", value: 1},
];

export default function Detailsform({navigation}){

    const [age, setAge] = React.useState(0);
    const [sex, setGender] = React.useState(0);
    const [sports, setSports] = React.useState(0);

    const details = () => {
        var user = firebase.auth().currentUser
        if(user){
            firebase.database().ref('patient/' + user.uid).set({
                name: user.displayName,
                email: user.email,
                phoneNumber: user.phoneNumber,
                age: age,
                gender: sex,
                sportsBackground: sports,
            }).then(() => {
                console.log("Success")
                navigation.replace("Readings")
            })
        }
        
    }

    return(
        <View style={styles.container}>
            <Text style={styles.signupText}>Enter your details</Text>
            <TextInput style={styles.inputBox} 
            placeholder="Age"
            onChangeText={(text) => {
                setAge(text)
            }}
            placeholderTextColor='rgba(255,255,255,0.5)'
            />
            <Text style={styles.genderText}>Gender</Text>
            <View>
                <RadioForm
                    radio_props={gender}
                    initial={-1}
                    onPress={(value) => {setGender(value)}}
                    buttonSize={10}
                    selectedButtonColor={'#fff'}
                    selectedLabelColor={'#fff'}
                    buttonColor={'#ffffff'}
                    labelColor={'#ffffff'}
                />
            </View>
            <Text style={styles.sportsText}>Sports Background</Text>
            <View>
                <RadioForm
                    radio_props={sportsback}
                    initial={-1}
                    onPress={(value) => {setSports(value)}}
                    buttonSize={10}
                    selectedButtonColor={'#ffffff'}
                    selectedLabelColor={'#fff'}
                    buttonColor={'#ffffff'}
                    labelColor={'#ffffff'}
                    formHorizontal={false}
                />
            </View>
            <TouchableOpacity onPress = {details} style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
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
        backgroundColor:'rgba(255,255,255,0.1)',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 10,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'rgba(1,1,1,1)'
    },
    signupText: {
        color: '#ffffff',
        fontSize: 18,
        marginVertical: 15
    },
    genderText: {
        color: '#ffffff',
        fontSize: 16,
        marginVertical: 16,
    },
    sportsText: {
        color: '#ffffff',
        fontSize: 16,
        marginVertical: 16,
    },
    button: {
        backgroundColor:'#fff',
        borderRadius: 12,
        marginVertical: 32,
        paddingHorizontal: 32,
        paddingVertical: 16,
        alignItems: 'center',
    },
    signupbuttonText: {
        color: 'rgba(0,0,0,1)',
        fontSize: 16
    }
  });
