import "../../styles/Header.scss";
import images from "../../utils/images";
import Navbar from "../Navbar/Navbar";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  return (
    <header className="header flex flex-col" style = {{background: `url(${images.hd_base}) center/cover no-repeat`}}>
      <Navbar />

    {/* Searchbar+ tags */}
      <div role="header" className="container flex-1 w-full flex items-center justify-center">
        <div className="hd-content flex flex-col justify-center items-center text-center">
          <h1 className="hd-title text-white">Our Newsroom</h1>
          <HeaderSearch/>

          <div className="hd-tags text-white flex items-center">
            <h3 className="hd-tags-title nowrap text-base">
              Popular Tags:
            </h3>

            <ul className="tags-list flex flex-wrap items-center">
              <li data-testid='tag' className="tags-item text-sm">Design</li>
              <li data-testid='tag' className="tags-item text-sm">User Experience</li>
              <li data-testid='tag' className="tags-item text-sm">User Interfaces</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header