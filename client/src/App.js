import React from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import './App.css';
import Navbar from './Components/layout/Navbar'
import Register from './Components/User/RegisterForm'
import Login from './Components/User/LoginForm'
import AuthState from './Context/auth/AuthState'
import AlertState from './Context/alert/AlertState'
import Alert from './Components/Alert/Alert'
import setAuthToken from './Context/utils/setAuthToekn'
import Dashboad from './Components/layout/Dashboard'

function App() {

  if(localStorage.token) {
    setAuthToken(localStorage.token)
  }
  return (
  
    <AuthState>
      <AlertState>
       <Router>
        <Navbar />
        <Alert />
        <Switch>
        <Route exact path="/" component={Dashboad} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
      </AlertState>
    </AuthState>
  );
}

export default App;
