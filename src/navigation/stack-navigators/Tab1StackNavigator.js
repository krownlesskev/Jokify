import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const Tab1 = () => (
    <View style={styles.center}>
        <Text style={{ color: 'white' }}>Tab 1 Stack</Text>
    </View>
)

export const Tab1StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Tab1" component={Tab1} />
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