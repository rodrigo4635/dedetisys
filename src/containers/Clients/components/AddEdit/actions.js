import { CLIENTS_ADD_EDIT_CHANGE_VALUE } from "constants/actionTypes"

export function changeValue(id, value) {
    return { type: CLIENTS_ADD_EDIT_CHANGE_VALUE, property: id, payload: value }
}