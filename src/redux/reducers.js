import { SET_EXPO_PUSH_TOKEN, SET_JOKE_SETUP, SET_JOKE_DELIVERY, } from "./actions";

const initialState = {
    expoPushToken: '',
    jokeSetup: '',
    jokeDelivery: '',
}

export function tokenReducer(state = initialState, aciton) {
    switch (aciton.type) {
        case SET_EXPO_PUSH_TOKEN:
            return { ...state, expoPushToken: aciton.payload };
        default:
            return state;
    }
}

export function jokeSetupReducer(state = initialState, action) {
    switch (action.type) {
        case SET_JOKE_SETUP:
            return { ...state, jokeSetup: action.payload };
        default:
            return state;
    }
}
export function jokeDeliveryReducer(state = initialState, action) {
    switch (action.type) {
        case SET_JOKE_DELIVERY:
            return { ...state, jokeDelivery: action.payload };
        default:
            return state;
    }
}

