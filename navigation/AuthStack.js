import React, {useState, useEffect} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import SignUpScreen from '../screens/SignUpScreen'
import SignInScreen from '../screens/SignInScreen'
import SplashScreen from '../screens/SplashScreen'

import AsyncStorage from '@react-native-community/async-storage'

const Stack = createStackNavigator();

const AuthStack = () => {

    const [isFirstLaunch, setIsFirstLaunch] = useState(null)
    let routName;

    useEffect(()=>{
        AsyncStorage.setItem('alreadyLaunched').then((value) =>{
            if(value== null){
                AsyncStorage.setItem('alreadyLaunched', 'true')
                setIsFirstLaunch(true)
            }else {
                setIsFirstLaunch(false)
            }
        })
    },[]);

    if(isFirstLaunch === null){
        return null;
    }else if (isFirstLaunch == true){
        routName = 'SplashScreen'
    }else {
        routName = 'SignInScreen'
    }

    return(
        <Stack.Navigator initialRoutName = {routName} >
            <Stack.Screen 
                name = 'SplashScreen'
                component ={SplashScreen}
            />
            <Stack.Screen 
                name = 'SignInScreen'
                component ={SignInScreen}
            />
            <Stack.Screen 
                name = 'SignUpScreen'
                component ={SignUpScreen}
            />
        </Stack.Navigator>

    )
}
export default AuthStack;