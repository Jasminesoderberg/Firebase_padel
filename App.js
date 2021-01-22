import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainHomeScreen from './screens/MainTabScreen'
import RootStackScreen from './screens/RootStackScreen'
import RootstackScreen from './screens/RootStackScreen';

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer >

    <RootStackScreen/>

    {/*<Stack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor: '#009387'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
        }}>
        <Stack.Screen name="Home" component={MainHomeScreen} />
        </Stack.Navigator>*/}
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
