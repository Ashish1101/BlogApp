import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import AuthContext from '../../Context/auth/authContext'
const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated , logout} = authContext


  const onLogout = () => {
      logout()
  }



    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#!">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse nav justify-content-end" id="navbarSupportedContent">
    <ul className="navbar-nav">
      {isAuthenticated !== true ? (
        <ul className="navbar-nav">
        <li className="nav-item active">
        <Link to="/login">Login</Link>
        </li>
        <li className="nav-item active">
        <Link to="/register">Sign up</Link>
        </li>
        </ul>
      ) : <li className="nav-item active">
       <button className="btn btn-primary" onClick={onLogout}>Logout</button>
      </li>}
    </ul>
    </div>
</nav>
    )
}

export default Navbar