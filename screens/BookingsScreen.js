import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

const BookingsScreen = ({navigation}) => {
    return (
    <View style={styles.container}>
        <Text>Bookings Screen</Text>
        <Button 
            title= 'Go to detais Screen '
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

export default BookingsScreen;