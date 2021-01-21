import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

const ProfileScreen = ({navigation}) => {
    return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Profile Screen</Text>

        <Button 
            title= 'Go to detais Screen... again '
            onPress={() => navigation.push('Details')}
        />
        <Button 
            title= 'Go to Home '
            onPress={() => navigation.navigate('Home')}
        />
        <Button 
            title= 'Go back '
            onPress={() => navigation.goBack()}
        />
        <Button 
            title= 'Go to first screen '
            onPress={() => navigation.popToTop()}
        />
    </View>
    )
}

export default ProfileScreen;