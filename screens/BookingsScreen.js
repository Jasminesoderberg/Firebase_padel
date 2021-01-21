import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

const BookingsScreen = ({navigation}) => {
    return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Bookings Screen</Text>
        <Button 
            title= 'Go to detais Screen '
            onPress={() => navigation.popToTop()}
        />

    </View>
    )
}

export default BookingsScreen;