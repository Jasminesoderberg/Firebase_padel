import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

const SignUpScreen = ({navigation}) => {
    return (
    <View style={styles.container}>
        <Text>SignUpScreen</Text>
        <Button 
            title= 'Go to home '
            onPress={() => alert('hello')}
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
export default SignUpScreen;