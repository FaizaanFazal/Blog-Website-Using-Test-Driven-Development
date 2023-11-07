import { Link, Navigate, json } from 'react-router-dom';
import Navitem from './Navitem';
import { useEffect, useReducer, useState } from 'react';

function getUser() {
  let user = localStorage.getItem('user');
  if (user) {
    user=JSON.parse(user);
  }
  else{
    user = null;
  }
  return user;
}

export default function Menuwrapper() {
  const [userr, setUserr] = useState(getUser());
  console.log(userr)

  const handlelogout = () => {
    localStorage.removeItem('user');
    setUserr(null);

  }

  useEffect(() => {
    let c =getUser();
    if (c) {
      console.log("there"+c?.userName)
      setUserr(c);
    }
    console.log("here"+c?.userName)
  }, [])
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
          {userr?.userName ? (
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
