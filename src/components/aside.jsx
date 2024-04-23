import aside from "./stylesheets/aside.css"
import characterImg from "../images/character.png";
import { TextField, Button, Box, ThemeProvider } from '@mui/material';
import theme from "./theme";

const Aside = () => {

  return (
    <ThemeProvider theme={theme}>
      <div className="aside">
        <h1 className="titleType1">Seletor de Personagem</h1>
        <p class="searchSubTitle">Para buscar um personagem basta digitar seu
          <span className="importantInfo"> nome</span> ou sua <span className="importantInfo">ID</span>.
        </p>
        <div className="searchBar">
          <TextField color="greenOne" sx={{ width: 600, mx: 6, my: 2}} label="Nome ou ID" variant="filled" inputProps={{ style: { color: 'white' } }}/>
          <Button sx={{my: 2, px: 6, py: 2}}variant="contained">Enviar</Button>
        </div>
        <Box sx={{backgroundColor: "rgb(30, 30, 30)"}}>
          <h1 className="titleType1">Personagem</h1>
        </Box>

      </div>
    </ThemeProvider>
  );
};

export default Aside;
