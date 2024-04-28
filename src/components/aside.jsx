import React from "react";
import { TextField, Button, ThemeProvider } from '@mui/material';
import theme from "./theme";
import characterImage from "../images/character.png"
import { useAppContext } from "../AppContext";
import "./stylesheets/aside.css";

const Aside = () => {
  const { getCharacter } = useAppContext();

  const handleGetCharacter = () => {
    const input = document.getElementById("inputArea1").value;
    document.getElementById("inputArea1").value = "";
    getCharacter(input);
  };

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
            onClick={handleGetCharacter}
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