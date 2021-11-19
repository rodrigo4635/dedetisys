import { DEF_PROPS } from "./inputs"

export const ACCOUNT_TYPES = {
    pf: { id: 'pf', label: 'Pessoa fisica', value: 0 },
    pj: { id: 'pj', label: 'Pessoa jurídica', value: 1 }
}

export const INPUTS = [
    { id: 'name', props: DEF_PROPS.name, size: 12 },
    { id: 'type', props: DEF_PROPS.clientType, elements: Object.values(ACCOUNT_TYPES), size: 6 },
    { id: 'taxvat', props: DEF_PROPS.taxvat, size: 6 },
    { id: 'email', props: DEF_PROPS.email, size: 4 },
    { id: 'tel_1', props: DEF_PROPS.tel, size: 4 },
    { id: 'tel_2', props: DEF_PROPS.tel, size: 4 },
    { id: 'address', props: DEF_PROPS.address, size: 9 },
    { id: 'number', props: DEF_PROPS.number, size: 3 },
    { id: 'complement', props: DEF_PROPS.complement, size: 3 },
    { id: 'district', props: DEF_PROPS.district, size: 3 },
    { id: 'city', props: DEF_PROPS.city, size: 3 },
    { id: 'state', props: DEF_PROPS.state, size: 3 },
]