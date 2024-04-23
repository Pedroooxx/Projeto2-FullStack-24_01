// Aside.jsx
import { TextField, Button, ThemeProvider } from '@mui/material';
import theme from "./theme";
import characterImage from "../images/character.png"
import "./stylesheets/aside.css";


const Aside = ({ characterList }) => {
  
  function getCharacter() {
    let input = document.getElementById("inputArea1").value;
    document.getElementById("inputArea1").value = "";

    if (!isNaN(input) && characterList[input]) {
      fetch(`https://thronesapi.com/api/v2/Characters/${input}`)
        .then((resp) => resp.json())
        .then((character) => showCharacter(character))
        .catch((error) => {
          console.error('Erro no fetch:', error);
        });
      document.getElementById("inputArea1").placeholder = 'Personagem Encontrado.';
    } else {
      const character = characterList.find(({ fullName }) => fullName === input);

      if (character) {
        fetch(`https://thronesapi.com/api/v2/Characters/${character.id}`)
          .then((resp) => resp.json())
          .then((character) => showCharacter(character))
          .catch((error) => {
            console.error('Erro no fetch:', error);
          });
        document.getElementById("inputArea1").placeholder = 'Personagem Encontrado.';
      } else {
        document.getElementById("inputArea1").placeholder = 'Personagem não encontrado.';
      }
    }
  }

  function showCharacter(character) {
    let characterName = document.getElementById("characterName");
    characterName.innerHTML = `${character.firstName} ${character.lastName}`;

    let characterTitle = document.getElementById("characterTitle");
    characterTitle.innerHTML = `${character.title}`;

    let characterFullname = document.getElementById("characterFullname");
    characterFullname.innerHTML = `${character.fullName}`;

    let characterFamily = document.getElementById("characterFamily");
    characterFamily.innerHTML = `${character.family}`;

    let characterId = document.getElementById("characterId");
    characterId.innerHTML = `${character.id}`;

    document.getElementById("characterImage").src = character.imageUrl;
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="aside">
        <h1 className="titleType1">Seletor de Personagem</h1>
        <p className="searchSubTitle">Para buscar um personagem, basta digitar seu nome ou sua ID.</p>
        <div className="searchBar">
          <TextField
            color="greenOne"
            sx={{ width: "50%", mx: "5%", my: 2 }}
            label="Nome ou ID"
            variant="filled"
            inputProps={{ style: { color: "rgb(237, 22, 73)" } }}
            id="inputArea1"
          />
          <Button
            sx={{ my: 2, px: 6, py: 2 }}
            variant="contained"
            onClick={getCharacter}
          >
            Enviar
          </Button>
        </div>
        <div className="characterBox">
          <h1 className="titleType2" id="characterName">Personagem</h1>
          <h2 class="titleType1" id="characterTitle"> </h2>
          <img id="characterImage" alt="Foto do Personagem" src={characterImage}></img>
          <div className="contentSepare">
            <h1 className="titleType1" id="characterFullname" style={{ marginTop: "20px" }}> </h1>
            <h2 className="titleType2" id="characterFamily" style={{ marginTop: "10px" }}> </h2>
            <p className="idNumType" id="characterId" style={{ marginTop: "10px" }}> </p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Aside;
