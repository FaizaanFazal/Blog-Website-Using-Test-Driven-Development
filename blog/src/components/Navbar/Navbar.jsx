import { useEffect, useState } from 'react';
import '../../styles/Navbar.scss';
import { Link } from 'react-router-dom';
import Menuwrapper from './Menuwrapper';
import Button from './Button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  const hideSideMenu = () => setSideMenuOpen(false);
  const showSideMenu = () => setSideMenuOpen(true);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 60) setScrolled(true);
    else setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav role="navigation" className={`navbar flex items-center ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container w-full flex justify-between">
        <div className="brand-and-toggler flex items-center justify-between">
          <Link data-testid="logo" to="/" className="nav-brand">
            Blogs
            {' '}
            <span className="nav-brand-dot" />
          </Link>
          <Button className="nav-show-btn text-white" onClick={showSideMenu}><i className="bi bi-list" /></Button>
        </div>

        <div className={`nb-menu-wrapper flex items-center ${isSideMenuOpen ? 'show' : ''}`}>
          <Button className="nav-hide-btn" onClick={hideSideMenu}><i className="bi bi-x-square" /></Button>
          <Menuwrapper />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
