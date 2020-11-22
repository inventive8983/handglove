import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Detailsform from './pages/Detailsform';
import Choose from './pages/Choose';
import Readings from './pages/Readings';


const Stack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
             <Stack.Navigator screenOptions={{
                header: () => null
            }} 
            initialRouteName="Readings">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Detailsform" component={Detailsform}/>
                <Stack.Screen name="Choose" component={Choose}/>
                <Stack.Screen name="Readings" component={Readings}/>
             </Stack.Navigator>
        </NavigationContainer>
    )
}
