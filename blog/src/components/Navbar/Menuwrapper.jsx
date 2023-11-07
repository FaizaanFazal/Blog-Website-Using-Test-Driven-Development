import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navitem from './Navitem';

export default function Menuwrapper() {
  const userr = useSelector((state) => state.user.user); // userName

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
          {userr.userName ? (
            <div className="nav-btn btn">{userr?.userName}</div>
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
