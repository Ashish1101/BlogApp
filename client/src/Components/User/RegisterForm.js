import React , {useState , useContext, useEffect} from 'react'
import AuthContext from '../../Context/auth/authContext'
import AlertContext from '../../Context/alert/alertContext'


const RegisterForm = (props) => {
    const authContext = useContext(AuthContext);
    const alertContext = useContext(AlertContext);

    const { setAlert } = alertContext;
  const { register , error , clearError , isAuthenticated} = authContext

  useEffect(() => {
     if(isAuthenticated) {
         props.history.push('/login')
     }
     if(error === 'Email already in use') {
       setAlert(error , 'danger')
       clearError();
     }
     // eslint-disable-next-line
  }, [error , props.history , isAuthenticated])

    const [user , setUser] = useState({
        name: '',
        email : '',
        password: '',
        password1: ''
    })

    const  {name , email , password , password1} = user
    
    
    const onchange = (e) => {
        setUser({...user , [e.target.name] : e.target.value})
    } 

    const onSubmit = (e) => {
        e.preventDefault()
        const Data = {
            name : user.name,
            email : user.email,
            password : user.password,
            password1: user.password1
        }
        if(name === '' || email === '' || password === '') {
            setAlert('All fields are required' , 'danger')
        } 
        if(password !== password1) {
            setAlert('Password do not match' , 'danger')
        } 
        else {
            register(Data)
        }
        
    }

    
    return (
    <div className="container w-50 my-4">
        <h2 className="text-center">Register <span className="text-danger">Edunix</span></h2>
        <form className="container" onSubmit={onSubmit}>
        <div className="form-group">
                <label>Name</label>
                <input type="text"
                 className="form-control" 
             
                aria-describedby="emailHelp"
                name="name"
                onChange={onchange}
                value={name} />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email"
                 className="form-control" 
             
                aria-describedby="emailHelp" 
                name="email"
                onChange={onchange}
                value={email} />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password"
                 className="form-control"
              
                name="password"
                onChange={onchange}
                value={password} />
            </div>

            <div className="form-group">
                <label>Confirm Password</label>
                <input type="password"
                 className="form-control"
              
                name="password1"
                onChange={onchange}
                value={password1} />
            </div>
         <button type="submit" className="btn btn-block btn-primary">Submit</button>
      </form>
    </div>
    )
}

export default RegisterForm
