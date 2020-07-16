import React , {useState, useEffect , useContext} from 'react'
import AuthContext from '../../Context/auth/authContext'
import AlertContext from '../../Context/alert/alertContext'

const LoginForm = (props) => {
    const authContext = useContext(AuthContext);
    const alertContext = useContext(AlertContext);

    const { setAlert } = alertContext;
    const { login , error , clearError , isAuthenticated} = authContext

   const [count  , setCount] = useState(0);

    useEffect(() => {
        if(isAuthenticated) {
            props.history.push('/');
        }
        if(error === 'invalid Data') {
            setCount(count + 1)
            setAlert(error , 'danger')
            clearError()
            if(count >= 2) {
                setAlert('Forgot Password! Click Reset to Create New', 'success')
                clearError()
            }
            
        }

        //eslint-disable-next-line
    }, [props.history, isAuthenticated , clearError , error])

   const [event , setEvent] = useState({
       email : "",
       password: ""
   })


   
   const onChange = (e) => {
       setEvent({...event , [e.target.name]: e.target.value})
   }

   const onSubmit = (e) => {
       e.preventDefault();
       if(email ===' ' || password === '') {
           setAlert('All field required', 'success')
       }
       const formData = {
           email: event.email,
           password: event.password
       }
      
       login(formData)
       console.log('submitted')
   }
   
   const {email , password  } = event
   
    return (
        <div className="container w-50 my-4">
        <h2 className="text-center">Login <span className="text-danger">Edunix</span></h2>
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
            <div className="form-group">
                <label>Password</label>
                <input type="password"
                 className="form-control" 
                value={password}
                onChange={onChange}
                name="password"
                aria-describedby="emailHelp" />
            </div>
            <button type="submit" className="btn btn-block btn-primary">Submit</button>
            {count >= 2 && (<button type="submit" className="btn btn-block btn-success">Reset Password</button>)}
            </form>
        </div>
    )
}

export default LoginForm
