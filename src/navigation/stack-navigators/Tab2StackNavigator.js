import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const Tab2 = () => (
    <View style={styles.center}>
        <Text style={{ color: 'white' }}>Tab 2 Stack</Text>
    </View>
)

export const Tab2StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Tab2" component={Tab2} />
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