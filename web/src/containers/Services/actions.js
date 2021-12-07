import { SERVICES_CHANGE_VALUE, SERVICES_CHANGE_LOADING, SNACKBAR_SHOW } from "constants/actionTypes"
import { API_URL, SNACKBAR_VARIANTS } from "constants/general"
import { getReducer } from "utils"

export function changeValue(id, value) {
    return { type: SERVICES_CHANGE_VALUE, property: id, payload: value }
}

export function loadData() {
    return dispatch => {
        const userToken = getReducer('app', 'user', 'token')
        console.log('Load services')

        fetch(`${ API_URL }/servicos`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${ userToken }`
            }
        })
        .then(res => res.json())
        .then(json => {
            console.log('Load services response: ', json)
            dispatch(changeValue('data', json))
        })
        .catch(error => {
            console.error('Error on load services: ', error)
            dispatch(changeValue('data', []))
            dispatch({ type: SNACKBAR_SHOW, message: 'Ocorreu um erro ao carregar os serviços', variant: SNACKBAR_VARIANTS.error })
        })
    }
}

export function deleteService(serviceId, services) {
    return dispatch => {
        console.log('Service id to delete: ', serviceId)

        dispatch({ type: SERVICES_CHANGE_LOADING, add: true, payload: serviceId })
        const userToken = getReducer('app', 'user', 'token')

        fetch(`${ API_URL }/servicos/${ serviceId }`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${ userToken }`
            }
        })
        .then(res => res.json())
        .then(json => {
            console.log('Delete service response: ', json)
            dispatch({ type: SERVICES_CHANGE_LOADING, payload: serviceId })

            if (json.success) {
                dispatch(changeValue('data', services.filter(el => el.id !== serviceId)))
            } else {
                throw new Error('')
            }
        })
        .catch(error => {
            console.error('Client delete error: ', error)
            dispatch({ type: SERVICES_CHANGE_LOADING, payload: serviceId })
            dispatch({ type: SNACKBAR_SHOW, message: 'Ocorreu um erro ao excluir o serviço', variant: SNACKBAR_VARIANTS.error })
        })
    }
}

/*const EXAMPLE_DATA = [
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
*/