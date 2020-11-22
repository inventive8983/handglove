import React , {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/pages/Login';
import Signup from './src/pages/Signup';
import Detailsform from './src/pages/Detailsform';

import Routes from './src/Routes';

//export default function App() {
 // return (
   // <View style={styles.container}>
     // <Routes/>
    //</View>
  //);
//}
export default Routes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37474f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

