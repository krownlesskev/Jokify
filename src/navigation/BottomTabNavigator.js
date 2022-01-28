import * as React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'

import { routes, screens } from './RouteItems';

import { HomeStackNavigator } from './stack-navigators/HomeStackNavigator'
import { JokeStackNavigator } from './stack-navigators/JokeStackNavigator'
import { Tab1StackNavigator } from './stack-navigators/Tab1StackNavigator'
import { Tab2StackNavigator } from './stack-navigators/Tab2StackNavigator'

const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();

const tabOptions = ({ route }) => {
    const item = routes.find(routeItem => routeItem.name === route.name)

    if (!item.showInTab) {
        return {
            tabBarButton: () => <View style={{ width: 0 }} />,
            headerShown: false,
            title: item.title,
        }
    }

    return {
        headerShown: false,
        title: item.title,
    }
}


export const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={tabOptions}>
            <Tab.Screen name={screens.HomeStack} component={HomeStackNavigator} />
            <Tab.Screen name={screens.JokeStack} component={JokeStackNavigator} />
            <Tab.Screen name={screens.Tab1Stack} component={Tab1StackNavigator} />
            <Tab.Screen name={screens.Tab2Stack} component={Tab2StackNavigator} />
        </Tab.Navigator>
    )
}