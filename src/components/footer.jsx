import footer from "./stylesheets/footer.css"
import logo from "../images/GOTlogoMono.png";

const Footer = () => {



  return (
    <footer className="footer">
      <img className="logoFoot"  src={logo} alt="ReciclA Logo Monocromático"/>
      <h2 className="footertxt">2024 - Baseado no conteúdo da API -<strong className="fontLink"> thronesapi.com </strong> </h2>
    </footer>
  );
};

export default Footer;
