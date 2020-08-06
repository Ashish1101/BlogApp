import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import AuthContext from '../../Context/auth/authContext'
import { toast } from 'react-toastify'
const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, loadUser } = authContext

  useEffect(() => {
    loadUser()
    //eslint-disable-next-line
  }, [])
  const onLogout = () => {
    logout()
    toast.success('Successfully loggged out.')
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
          ) : <ul className="nav-item active">
              <li className="btn btn-primary" onClick={onLogout}>Logout</li>
              <li className="btn btn-primary"><Link to="/posts">Add Post</Link></li>
              <li className="btn btn-primary"><Link to="/show">Show Post</Link></li>

            </ul>}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar