import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

const PostsScreen = ({navigation}) => {
    return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Posts Screen</Text>
        <Button 
            title= 'Go to detais Screen '
            onPress={() => navigation.popToTop()}
        />

    </View>
    )
}

export default PostsScreen;