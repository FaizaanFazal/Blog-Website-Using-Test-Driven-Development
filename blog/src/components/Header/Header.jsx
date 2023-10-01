import "../../styles/Header.scss";
import images from "../../utils/images";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className="header flex flex-col" style = {{background: `url(${images.hd_base}) center/cover no-repeat`}}>
      <Navbar />
    </header>
  )
}

export default Header