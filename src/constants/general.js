import * as Containers from 'containers'

export const SNACKBAR_VARIANTS = {
    success: 'success',
    warning: 'warning',
    info: 'info',
    error: 'error'
}

export const ROUTES = [
    {
        path: '/',
        name: 'Inicio',
        comp: () => <Containers.Main/>
    },
    {
        path: '/clientes',
        name: 'Clientes',
        comp: () => <Containers.Clients/>
    },
    {
        path: '/servicos',
        name: 'Servicos',
        comp: () => <Containers.Services/>
    }
]