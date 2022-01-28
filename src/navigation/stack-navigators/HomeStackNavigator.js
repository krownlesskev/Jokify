import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator();

const Home = () => {
    return (
        <View style={styles.center}>
            <Text style={{ color: 'white' }}>Home Screen</Text>
        </View>
    )
}

export const HomeStackNavigator = () => {

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Home" component={Home} />
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