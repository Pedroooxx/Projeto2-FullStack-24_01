import aside from "./stylesheets/aside.css"
import characterImg from "../images/character.png";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Aside = () => {

  return (
    <div className="aside">
      <h1 className="searchTitle">Seletor de Personagem</h1>
      <p class="searchSubTitle">Para buscar um personagem basta digitar seu <span className="importantInfo">nome</span> ou sua <span className="importantInfo">ID</span>. </p>
      <TextField sx={{ color: "green"}} variant="standard" />
      <Button sx={{ color: "black", bgcolor: "rgb(193, 237, 48)"}} variant="contained">Contained</Button>

    </div>
  );
};

export default Aside;
