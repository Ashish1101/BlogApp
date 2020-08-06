import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './Components/layout/Navbar'
import Register from './Components/User/RegisterForm'
import Login from './Components/User/LoginForm'
import AuthState from './Context/auth/AuthState'
import AlertState from './Context/alert/AlertState'
import PostState from './Context/posts/PostState'
import Alert from './Components/Alert/Alert'
import setAuthToken from './Context/utils/setAuthToekn'
import Dashboad from './Components/layout/Dashboard'
import Forgot from './Components/Reset/Forgot'
import Reset2 from './Components/Reset/Reset2'
import Post from './Components/post/Post'
import ShowPost from './Components/post/ShowPost'
import PrivateRoute from './Components/privateRoute'
import Bootstrap from './Components/Bootstrap'
import { ToastContainer } from 'react-toastify'

function App() {

  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }
  return (

    <AuthState>
      <AlertState>
        <PostState>
          <Router>
            <Navbar />
            <Alert />
            <Switch>
              <Route exact path="/bootstrap" component={Bootstrap} />
              <Route exact path="/" component={Dashboad} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/forgot" component={Forgot} />
              <Route path="/reset/:token" component={Reset2} />
              <PrivateRoute path="/posts" component={Post} />
              <PrivateRoute path='/show' component={ShowPost} />
            </Switch>
          </Router>
        </PostState>
      </AlertState>
      <ToastContainer autoClose={2000} />
    </AuthState>

  );
}

export default App;
