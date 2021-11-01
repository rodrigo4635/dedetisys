import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/organisms/App/App'
import Snackbar from './components/atoms/Snackbar/Snackbar'
import theme from './styles/theme'
import store from './utils/store'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { Provider } from 'react-redux'

const Main = () => (
    <React.StrictMode>  
        <ThemeProvider theme={ theme }>
            <Provider store={ store }>
                <>
                    <CssBaseline />
                    <App/>
                    <Snackbar/>
                </>
            </Provider>
        </ThemeProvider>
    </React.StrictMode>
)

ReactDOM.render(<Main/>, document.getElementById('root'))