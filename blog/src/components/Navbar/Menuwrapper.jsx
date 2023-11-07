import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navitem from './Navitem';
import { useSelector } from 'react-redux';

export default function Menuwrapper() {
  const [user, setUser] = useState();
  const userr = useSelector(state => state.user.user); //userName
  console.log(userr)

  useEffect(() => {
    if (userr["userName"] && userr["userName"].length > 0) {
      setUser(userr);
    }
    else {
      setUser(null)
    }
  }, [userr])

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
            <div className="nav-btn btn">{user.userName}</div>
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
