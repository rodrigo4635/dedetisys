/** Inputs length limit */
export const LENGTH = {
    email: { min: 3, max: 100 },
    name: { min: 5, max: 60 },
    taxvat: { min: 11, max: 14 }, 
    password: { min: 6, max: 30 },
    address: { min: 5, max: 60 },
    complement: { min: 0, max: 60 },
    district: { min: 2, max: 40 },
    city: { min: 2, max: 40 },
    state: { min: 2, max: 2 },
    tel: { min: 10, max: 14 },
    number: { min: 1, max: 6 }
}

/**Regix to some inputs */
export const REGEX = {
    email: '^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$',
    name: `^([a-zA-Z\u00C0-\u00FF ]){${ LENGTH.name.min },${ LENGTH.name.max }}$`,
    tel: '^(([(]([0-9]{2})[)])|([0-9]{2}))[ ]?[0-9]?[ ]?[0-9]{4}(s|[-])?[0-9]{4}$'
}

/** Common props applied in these types of inputs */
export const DEF_PROPS = {
    default: {
        required: true,
        fullWidth: true,
        variant: "outlined",
    },
    clientType: {
        select: true,
        label: 'Tipo',
        required: true,
        fullWidth: true,
        variant: "outlined",
    },
    taxvat: {
        required: true,
        fullWidth: true,
        variant: "outlined",
        label: "Identidade",
        inputProps: { maxLength: LENGTH.taxvat.max, type: 'text' }
    },
    name: { 
        autoComplete: "name",
        required: true,
        fullWidth: true,
        variant: "outlined",
        label: "Nome completo",
        inputProps: { maxLength: LENGTH.name.max, type: 'text' }
    },
    email: {
        autoCapitalize: 'none',
        variant: "outlined",
        required: true,
        fullWidth: true,
        label: "E-mail",
        autoComplete: "email",
        inputProps: { maxLength: LENGTH.email.max, type: 'email' }
    },
    password: {
        label: "Senha", 
        variant: "outlined",
        required: true,
        fullWidth: true,
        type: 'password',
        autoComplete: "current-password",
        inputProps: { maxLength: LENGTH.password.max, type: 'password' }
    },
    tel: {
        autoComplete: 'tel-national',
        type: 'tel',
        required: true,
        variant: "outlined",
        fullWidth: true,
        label: "Telefone", 
        inputProps: { maxLength: LENGTH.tel.mask, type: 'text' }
    },
    address: {
        required: true, 
        variant: "outlined",
        fullWidth: true,
        label: "Endereço", 
        inputProps: { maxLength: LENGTH.address.max, type: 'text' }
    },
    number: {
        required: true, 
        variant: "outlined",
        fullWidth: true,
        label: "Número", 
        inputProps: { maxLength: LENGTH.number.max, type: 'text' }
    },
    city: {
        required: true,
        fullWidth: true,
        variant: "outlined",
        label: "Município", 
        inputProps: { maxLength: LENGTH.city.max, type: 'text' }
    },
    complement: {
        fullWidth: true,
        variant: "outlined",
        label: "Complemento", 
        inputProps: { maxLength: LENGTH.complement.max, type: 'text' }
    },
    district: {
        required: true,
        fullWidth: true,
        variant: "outlined",
        label: "Bairro", 
        inputProps: { maxLength: LENGTH.district.max, type: 'text' }
    },
    state: {
        required: true,
        fullWidth: true,
        variant: "outlined",
        label: "Estado", 
        inputProps: { maxLength: LENGTH.state.max, type: 'text' }
    },
}

/**Input maks types */
export const MASK = {
    phone: value => [...['(', /[1-9]/, /\d/, ')', ' '], ...'2345'.includes(value?.[5]) ? [] : [/\d/], ...[/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]],
    cpfCnpj: value => value?.length > 11 ? [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/] : [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/,/\d/, /\d/],
}