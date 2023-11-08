import { Link, Navigate, json } from 'react-router-dom';
import Navitem from './Navitem';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/userSlice';


export default function Menuwrapper() {
  const user = useSelector(state => state.user.isloggedin);
  const dispatch=useDispatch();

  const handlelogout = () => {
   
    dispatch(logout())
  }

  useEffect(() => {
    
  }, [user])

  return (
    <div>
      <ul className="nav-menu flex items-center">
        <Navitem to="/" text="Home" />
        {/* <Navitem to="/featured" text="Featured">
          <span className="nav-link-icon"><i className="bi bi-chevron-down" /></span>
        </Navitem> */}
        <Navitem to="/about" text="About" />
        <Navitem to="/contacts" text="Contact" />
        <div className="nav-btns">
          {user ? (
            <button data-testid="listitem" onClick={handlelogout} className="nav-btn btn">
              Logout
            </button>
          ) : (
            <Link data-testid="listitem" to="/login" className="nav-btn btn">
              Login
            </Link>
          )}
        </div>
        <div className="nav-btns">
          <Link data-testid="listitem" to="/createpost" className="nav-btn btn">Post</Link>
        </div>
      </ul>
    </div>
  );
}
