import { APP_CHANGE_VALUE } from "constants/actionTypes";

export function loadUser() {
    return { type: APP_CHANGE_VALUE, property: 'user', payload: {} }
}