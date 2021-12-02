import { CLIENTS_CHANGE_VALUE, CLIENTS_ADD_EDIT_SET, CLIENTS_CHANGE_LOADING } from "constants/actionTypes"

const EXAMPLE_DATA = [
    { id: 'el1', name: 'Rodrigo', type: 0, taxvat: '00000000000', email: 'rodrigo@mail.com', tel_1: '48999999999', address: 'Rua teste', number: 1, complement: 'Casa', district: 'centro', city: 'Turvo', state: 'SC', latitude: -29.123, longitude: -48.1923 },
    { id: 'el2', name: 'Joao', type: 0, taxvat: '00000000000', email: 'Joao@mail.com', tel_1: '48999999999', address: 'Rua teste 123123123', number: 1, complement: 'Casa', district: 'Interior', city: 'Criciuma', state: 'SC', latitude: -29.123, longitude: -48.1923 },
    { id: 'el3', name: 'Marcos', type: 0, taxvat: '00000000000', email: 'Marcos@mail.com', tel_1: '48999999999', address: 'Rua teste tteste ', number: 1, complement: 'Casa', district: 'centro', city: 'Ararangua', state: 'SC', latitude: -29.123, longitude: -48.1923 },
    { id: 'el4', name: 'Leticia', type: 0, taxvat: '00000000000', email: 'Leticia@mail.com', tel_1: '48999999999', address: 'Rua teste de novo', number: 1, complement: 'Casa', district: 'centro', city: 'Turvo', state: 'SC', latitude: -29.123, longitude: -48.1923 },
    { id: 'el5', name: 'Carlos', type: 0, taxvat: '00000000000', email: 'Carlos@mail.com', tel_1: '48999999999', address: 'Rua teste de axa', number: 1, complement: 'Casa', district: 'centro', city: 'Turvo', state: 'SC', latitude: -29.123, longitude: -48.1923 },
    { id: 'el6', name: 'Gabriel', type: 0, taxvat: '00000000000', email: 'Gabriel@mail.com', tel_1: '48999999999', address: 'Rua xaxas adaxas', number: 1, complement: 'Casa', district: 'centro', city: 'Turvo', state: 'SC', latitude: -29.123, longitude: -48.1923 },
    { id: 'el7', name: 'Amanda', type: 0, taxvat: '00000000000', email: 'Amanda@mail.com', tel_1: '48999999999', address: 'Rua asas asas asas', number: 1, complement: 'Casa', district: 'centro', city: 'Turvo', state: 'SC', latitude: -29.123, longitude: -48.1923 },
    { id: 'el8', name: 'Laura', type: 0, taxvat: '00000000000', email: 'Laura@mail.com', tel_1: '48999999999', address: 'Rua asdasd asd asd asd asd asd a', number: 1, complement: 'Casa', district: 'centro', city: 'Turvo', state: 'SC', latitude: -29.123, longitude: -48.1923 },
    { id: 'el9', name: 'Jonas', type: 0, taxvat: '00000000000', email: 'Jonas@mail.com', tel_1: '48999999999', address: 'Rua teste de novo', number: 1, complement: 'Casa', district: 'centro', city: 'Turvo', state: 'SC', latitude: -29.123, longitude: -48.1923 },
]

export function changeValue(id, value) {
    return { type: CLIENTS_CHANGE_VALUE, property: id, payload: value }
}

export function loadData() {
    return dispatch => {
        setTimeout(() => {
            dispatch(changeValue('data', EXAMPLE_DATA))
        }, 2000)
    }
}

export function deleteClient(client, clients) {
    return dispatch => {
        dispatch({ type: CLIENTS_CHANGE_LOADING, add: true, payload: client.id })
        setTimeout(() => {
            dispatch(changeValue('data', clients.filter(el => el.id !== client.id)))
            dispatch({ type: CLIENTS_CHANGE_LOADING, payload: client.id })
        }, 2000)
    }
}