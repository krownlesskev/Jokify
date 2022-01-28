export const SET_EXPO_PUSH_TOKEN = 'SET_EXPO_PUSH_TOKEN';
export const SET_JOKE_SETUP = 'SET_JOKE_SETUP';
export const SET_JOKE_DELIVERY = 'SET_JOKE_DELIVERY';

export const setExpoPushToken = expoPushToken => dispatch => {
    dispatch({
        type: SET_EXPO_PUSH_TOKEN,
        payload: expoPushToken,
    })
}

export const setJokeSetup = jokeSetup => dispatch => {
    dispatch({
        type: SET_JOKE_SETUP,
        payload: jokeSetup,
    })
}
export const setJokeDelivery = jokeDelivery => dispatch => {
    dispatch({
        type: SET_JOKE_DELIVERY,
        payload: jokeDelivery,
    })
}