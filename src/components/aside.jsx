import aside from "./stylesheets/aside.css"
import characterImg from "../images/character.png";
import Button from '@mui/material/Button';


const Aside = () => {

  return (
    <div className="aside">
      <h1 className="searchTitle">Seletor de Personagem</h1>
      <p class="searchSubTitle">Para buscar um personagem basta digitar seu <span className="importantInfo">nome</span> ou sua <span className="importantInfo">ID</span>. </p>
      <Button variant="outlined">Buscar</Button>;


    </div>
  );
};

export default Aside;
