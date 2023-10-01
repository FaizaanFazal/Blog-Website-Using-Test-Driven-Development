import { useEffect, useState } from "react";
import "../../styles/Navbar.scss";
import Menuwrapper from "./Menuwrapper";

const Navbar = () => {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if(offset > 60) setScrolled(true);
    else setScrolled(false);
  }

  const showSideMenu = () => setSideMenuOpen(true);
  const hideSideMenu = () => setSideMenuOpen(false);

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
          <button type="button" className="nav-show-btn text-white" onClick={showSideMenu}>
            <i className="bi bi-list"></i>
          </button>
        </div>

        <Menuwrapper/>
      </div>
    </nav>
  )
}

export default Navbar