import React from 'react'
import {View, TouchableOpacity, Text} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const AppStack = () => {
    return(

    <Tab.Navigator 
    
    initialRouteName='Home'
    activeColor='#e91e63'
    >
        <Tab.Screen name='Home' component={HomeScreen} 
        options={{
            tabBarLable: 'Home',
            tabBarIcon: ({color}) => (
            <Icon name='ios-home-outline' color={color} size={24}/>   
            )    
        }}/>
        <Tab.Screen name='Bookings' component={BookingsScreen}
            options={{
            tabBarLable: 'Bookings',
            tabBarIcon: ({color}) => (
            <Icon name='ios-calendar-outline' color={color}  size={24}/>   
            )    
        }}
        />
        <Tab.Screen name='Posts' component={PostsScreen}
            options={{
            tabBarLable: 'Posts',
            tabBarIcon: ({color}) => (
            <Icon name='ios-chatbox-ellipses-outline' color={color} size={24}/>   
            )    
        }}
        />
        <Tab.Screen name='Profile' component={ProfileScreen}
            options={{
            tabBarLable: 'Profile',
            tabBarIcon: ({color}) => (
            <Icon name='ios-person-outline' color={color} size={24}/>   
            )    
        }}
        />
    </Tab.Navigator>
    )
}

const MainHomeScreen = () => {
    return(
        <Stack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor: '#009387'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={ProfileScreen} />
        </Stack.Navigator>
    )
}

export default AppStack;