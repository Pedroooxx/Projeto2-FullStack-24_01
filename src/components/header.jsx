import header from "./stylesheets/header.css";
import logo from "../images/GOTlogo.png";

const Header = () => {

  return (
    <div className="header">

      <a href="/"> <img className="logo" src={logo} alt="GOT Characters Logo"/> </a>

    </div>
  );
};

export default Header;
