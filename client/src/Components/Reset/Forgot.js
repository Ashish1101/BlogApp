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
    email : "",
  })

const onChange = (e) => {
    setEvent({...event , [e.target.name]: e.target.value})
}

const Data = {
    email: event.email
}

const {email } = event

const onSubmit = (e) => {
    e.preventDefault();
    if(email ==='') {
        setAlert('Email is Required', 'success')
    }
    forgot(Data)
    console.log('submitted')
}




  return (
    <div className="container w-50 my-4">
        <h2 className="text-center">Reset <span className="text-danger">Password</span></h2>
         <form onSubmit={onSubmit}>
            <div className="form-group">
                <label >Email</label>
                <input type="email"
                 className="form-control" 
                 value={email}
                 name="email"
                 onChange={onChange}
                aria-describedby="emailHelp" />
            </div>
            <button type="submit" className="btn btn-block btn-primary">Send Email</button>
            </form>
        </div>
  )
}

export default Forgot
