import React , {useContext , useEffect} from 'react'
import AuthContext from '../../Context/auth/authContext'

const Dashboard = (props) => {
    const authContext = useContext(AuthContext);
    const { user , loadUser ,   isAuthenticated} = authContext
    useEffect(() => {
       loadUser()
        //eslint-disable-next-line
    }, [])
    return (
        <div>
            {user && <h1>{user.name}</h1>}
        </div>
    )
}

export default Dashboard
