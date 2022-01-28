import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

const Joke = () => {
    const { jokeDelivery } = useSelector(state => state.jokeDeliveryReducer)

    return (
        <View style={styles.center} >
            <Text style={{ color: 'white' }}>{jokeDelivery}</Text>
        </View >
    )
}

export const JokeStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Joke" component={Joke} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
})