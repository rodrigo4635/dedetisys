import { DEF_PROPS } from "./inputs"

export const DONE = {
    no: { id: 'no', label: 'Não', value: '0' },
    yes: { id: 'yes', label: 'Sim', value: '1' }
}

export const INPUTS = [
    { id: 'description', props: DEF_PROPS.description, size: 12 },
    { id: 'contactName', props: { ...DEF_PROPS.name, label: 'Nome para contato' }, size: 12 },
    { id: 'price', props: DEF_PROPS.price, size: 4, formatValue: value => parseFloat(value.replace(/./g, '').replace(',', '.')) },
    { id: 'amountPaid', props: { ...DEF_PROPS.price, label: 'Valor pago' }, size: 4, formatValue: value => parseFloat(value.replace(/./g, '').replace(',', '.')) },
    { id: 'duration', props: { ...DEF_PROPS.price, label: 'Duração (Horas)' }, size: 4, formatValue: value => parseFloat(value.replace(/./g, '').replace(',', '.')) },
    { id: 'done', props: { ...DEF_PROPS.default, label: 'Finalizado', select: true }, elements: Object.values(DONE), size: 6 },
    { id: 'observations', props: { ...DEF_PROPS.default, label: 'Observações' }, size: 12 },
    { id: 'date', props: { ...DEF_PROPS.default, label: 'Data', type: 'date' }, size: 6 },
    { id: 'expirationDate', props: { ...DEF_PROPS.default, label: 'Data expiração', type: 'date' }, size: 6 },
]