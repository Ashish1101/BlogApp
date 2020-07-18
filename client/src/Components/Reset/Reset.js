import React , {useState , useContext, useEffect} from 'react'
import AlertContext from '../../Context/alert/alertContext'
import AuthContext from '../../Context/auth/authContext'


const Forgot = (props) => {

  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);


  const { setAlert } = alertContext;
  const { forgot , isForgot , error } = authContext

  useEffect(() => {
  if(error === "No User with this email"){
      setAlert(error , 'danger')
  }
  if(isForgot) {
    props.history.push('/login')
  }
  //eslint-disable-next-line
  }, [])

  const [event , setEvent] = useState({
    password : '',
    password1:''
  })

const onChange = (e) => {
    setEvent({...event , [e.target.name]: e.target.value})
}

const Data = {
    password: event.password
}

const { password , password1 } = event

const onSubmit = (e) => {
    e.preventDefault();
    if(password !== password1) {
        setAlert('Password don not match', 'success')
    }
  
    console.log('submitted')
}




  return (
    <div className="container w-50 my-4">
        <h2 className="text-center">Update <span className="text-danger">Password</span></h2>
         <form onSubmit={onSubmit}>
            <div className="form-group">
                <label >Password</label>
                <input type="email"
                 className="form-control" 
                 value={password}
                 name="password"
                 onChange={onChange}
                 />
            </div>
            <div className="form-group">
                <label >Confirm Password</label>
                <input type="email"
                 className="form-control" 
                 value={password1}
                 name="password1"
                 onChange={onChange}
                 />
            </div>
            <button type="submit" className="btn btn-block btn-primary">Update Password</button>
            </form>
        </div>
  )
}

export default Forgot
