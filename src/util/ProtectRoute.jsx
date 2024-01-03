import React, { useContext, useEffect,useState } from 'react'
import { layoutContext, userContext } from '../store/Context'
import { useNavigate } from 'react-router-dom'
function ProtectRoute({ children }) {
    const { user } = useContext(userContext)
    const { login, setLogin } = useContext(layoutContext)
    const [allow, setAllow] = useState(false)
    const navigate = useNavigate()
    console.log("ff" + user)
    useEffect(() => {
        console.log("child");
        if (user === null) {

            navigate('/')

            setLogin(true)
        } else {
            setAllow(true)
        }
    }, [user])

    return <>{allow && children}</>
}

export default ProtectRoute