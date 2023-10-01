import { useEffect, useState } from "react";
import "../../styles/Navbar.scss";
import Menuwrapper from "./Menuwrapper";
import Button from "./Button";

const Navbar = () => {
 
  const [scrolled, setScrolled] = useState(false);
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  const hideSideMenu = () => setSideMenuOpen(false);
  const showSideMenu = () => setSideMenuOpen(true);

  const handleScroll = () => {
    const offset = window.scrollY;
    if(offset > 60) setScrolled(true);
    else setScrolled(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav role="navigation" className={`navbar flex items-center ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container w-full flex justify-between">
        <div className="brand-and-toggler flex items-center justify-between">
            <a data-testid="logo" href="#" className="nav-brand text-white">
              Blogs <span className="nav-brand-dot bg-white"></span>
            </a>
            <Button className="nav-show-btn text-white" onClick={showSideMenu}><i className="bi bi-list"></i></Button>
        </div>
        
        <div  className={`nb-menu-wrapper flex items-center ${isSideMenuOpen ? "show" : ""}`}>
            <Button className="nav-hide-btn" onClick={hideSideMenu}><i className="bi bi-x-square"></i></Button>
            <Menuwrapper/>
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar