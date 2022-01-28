import React, { useState, useRef, useEffect } from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, } from '@react-navigation/drawer';
import { screens } from './RouteItems'
import { BottomTabNavigator } from './BottomTabNavigator';
import * as Notifications from 'expo-notifications'
import { registerForPushNotificationsAsync } from '../services/NotificationRegistration'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { Store } from '../redux/store'
import { setExpoPushToken, setJokeSetup, setJokeDelivery } from '../redux/actions'
import axios from 'axios'
import { useIsFocused, useTheme } from '@react-navigation/native';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});


const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
    const { expoPushToken } = useSelector(state => state.tokenReducer)
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();
    const { jokeSetup } = useSelector(state => state.jokeSetupReducer)
    const { jokeDelivery } = useSelector(state => state.jokeDeliveryReducer)


    const dispatch = useDispatch();

    const fetchJoke = async () => {
        const result = await axios('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart')
        dispatch(setJokeSetup(result.data.setup))
        dispatch(setJokeDelivery(result.data.delivery))
    }

    const isFoucsed = useIsFocused();

    useEffect(() => {
        fetchJoke();
    }, [isFoucsed])

    useEffect(() => {

        registerForPushNotificationsAsync().then(token => dispatch(setExpoPushToken(token)));
        // Runs when notification run
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        });

        // Runs after opening notification
        responseListener.current = Notifications.addNotificationResponseReceivedListener(() => {
            props.navigation.navigate('JokeStack', { jokeDelivery })
        });

        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current);
            Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, [])

    const sendPushNotification = async (expoPushToken) => {
        const message = {
            to: expoPushToken,
            sound: 'default',
            title: 'Jokify',
            body: jokeSetup,
        };

        await fetch('https://exp.host/--/api/v2/push/send', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Accept-encoding': 'gzip, deflate',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
        });
    }

    return (
        <DrawerContentScrollView {...props} style={{ backgroundColor: '#1e1e1e' }}>
            <DrawerItem label='Home' onPress={() => {
                props.navigation.navigate('HomeStack')
                fetchJoke();
            }} />
            <DrawerItem label='Show me a Joke' onPress={() => {
                sendPushNotification(expoPushToken);
            }} />
        </DrawerContentScrollView>
    )
}




export const DrawerNavigator = (...props) => {

    return (
        <Provider store={Store}>

            <Drawer.Navigator
                drawerContent={(props) => <CustomDrawerContent {...props} />}
            >
                <Drawer.Screen name={screens.HomeTab} component={BottomTabNavigator}
                    options={{
                        title: 'Jokify',
                        // headerStyle: {
                        //     backgroundColor: "#1DB954"
                        // },
                        // headerTintColor: '#fff',
                        // headerTitleStyle: {
                        //     fontWeight: 'bold'
                        // }
                    }}
                    contentOptions
                />
            </Drawer.Navigator>
        </Provider>

    )
}
