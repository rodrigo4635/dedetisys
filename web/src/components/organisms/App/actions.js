import { APP_CHANGE_VALUE } from "constants/actionTypes";

export function loadUser() {
    // Check for user credentials
    return { type: APP_CHANGE_VALUE, property: 'user', payload: {} }
}

export function signOut() {
    return { type: APP_CHANGE_VALUE, property: 'user', payload: {} }
}