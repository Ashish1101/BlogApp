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
import SinglePost from './Components/post/SinglePost'
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
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/forgot" component={Forgot} />
              <Route exact path="/reset/:token" component={Reset2} />
              <PrivateRoute exact path="/posts/:id" component={SinglePost} />
              <PrivateRoute exact path="/posts" component={Post} />
              <PrivateRoute exact path='/show' component={ShowPost} />
            </Switch>
          </Router>
        </PostState>
      </AlertState>
      <ToastContainer autoClose={2000} />
    </AuthState>

  );
}

export default App;
