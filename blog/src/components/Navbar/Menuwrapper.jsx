import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import Navitem from './Navitem';
import { logout } from '../../Redux/userSlice';
import 'react-toastify/dist/ReactToastify.css';

export default function Menuwrapper() {
  const [user, setUser] = useState();
  const userr = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handlelogout = () => {
    dispatch(logout()).then(() => {
      toast.info('Logged out', { position: toast.POSITION.TOP_RIGHT, duration: 2000 });
    });
  };

  useEffect(() => {
    setUser(userr);
  }, [userr]);

  return (
    <div>
      <ToastContainer />
      <ul className="nav-menu flex items-center">
        <Navitem to="/" text="Home" />
        {/* <Navitem to="/featured" text="Featured">
          <span className="nav-link-icon"><i className="bi bi-chevron-down" /></span>
        </Navitem> */}
        <Navitem to="/about" text="About" />
        <Navitem to="/contacts" text="Contact" />
        <div className="nav-btns">
          {user?.user?.userName ? (
            <button type="button" data-testid="listitem" onClick={handlelogout} className="animated-button nav-btn btn">
              Logout
            </button>
          ) : (
            <Link data-testid="listitem" to="/login" className="nav-btn btn animated-button">
              Login
            </Link>
          )}
        </div>
        {user?.isloggedin && (
        <div className="nav-btns">
          <Link data-testid="listitem" to="/createpost" className="nav-btn btn">Post</Link>
        </div>
        )}
      </ul>
    </div>
  );
}
