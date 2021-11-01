/** Inputs length limit */
export const LENGTH = {
    email: { min: 3, max: 150 },
    fullname: { min: 5, max: 150 },
    password: { min: 6, max: 30 },
    address: { min: 5, max: 150 },
    city: { min: 2, max: 70 },
    phone: { min: 8, max: 11, mask: 17 },
}

/**Regix to some inputs */
export const REGEX = {
    email: '^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$',
    fullname: `^([a-zA-Z\u00C0-\u00FF ]){${ LENGTH.fullname.min },${ LENGTH.fullname.max }}$`,
    phone: '^(([(]([0-9]{2})[)])|([0-9]{2}))[ ]?[0-9]?[ ]?[0-9]{4}(s|[-])?[0-9]{4}$'
}

/** Common props applied in these types of inputs */
export const DEF_PROPS = {
    default: {
        required: true,
        fullWidth: true,
        variant: "outlined",
    },
    fullname: { 
        autoComplete: "name",
        required: true,
        fullWidth: true,
        variant: "outlined",
        label: "Nome completo",
        inputProps: { maxLength: LENGTH.fullname.max, type: 'text' }
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
    phone: {
        autoComplete: 'tel-national',
        type: 'tel',
        required: true,
        variant: "outlined",
        fullWidth: true,
        label: "Telefone", 
        inputProps: { maxLength: LENGTH.phone.mask, type: 'text' }
    },
    address: {
        required: true, 
        variant: "outlined",
        fullWidth: true,
        label: "Endereço", 
        inputProps: { maxLength: LENGTH.address.max, type: 'text' }
    },
    city: {
        required: true,
        fullWidth: true,
        variant: "outlined",
        label: "Município", 
        inputProps: { maxLength: LENGTH.city.max, type: 'text' }
    },
}

/**Input maks types */
export const MASK = {
    phone: value => [...['(', /[1-9]/, /\d/, ')', ' '], ...'2345'.includes(value?.[5]) ? [] : [/\d/], ...[/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]],
    cpfCnpj: value => value?.length > 11 ? [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/] : [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/,/\d/, /\d/],
}