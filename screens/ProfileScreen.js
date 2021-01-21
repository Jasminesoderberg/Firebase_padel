import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

const ProfileScreen = ({navigation}) => {
    return(
    <View style={styles.container}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ProfileScreen;