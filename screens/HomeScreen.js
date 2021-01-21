import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button 
            title= 'Go to Profile Screen '
            onPress={() => navigation.navigate('Details')}
        />

    </View>
    )
}

export default HomeScreen;