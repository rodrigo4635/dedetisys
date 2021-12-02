import React, { useEffect } from 'react'
import { Auth } from 'containers'
import { useSelector } from 'react-redux'
import { SplashScreen } from 'components/atoms'
import Routes from '../Routes/Routes'
//import { loadUser } from './actions'

const App = () => {
    //const dispatch = useDispatch()
    const user = useSelector(state => state.app.user)

    useEffect(() => {
        //dispatch(loadUser())
        // eslint-disable-next-line
    }, [])

    if (user) {
        return user.uid ? <Routes/> : <Auth/>
    }
    return <SplashScreen/> 
}

export default App