import React, { createContext, useState, useEffect, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [characterList, setCharacterList] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    getCharacterList();
  }, []);

  const getCharacterList = () => {
    fetch("https://thronesapi.com/api/v2/Characters/")
      .then((resp) => resp.json())
      .then((data) => {
        setCharacterList(data);
      })
      .catch((error) => {
        console.error("Error fetching character list: ", error);
      });
  };

  const updateSearchHistory = (searchTerm) => {
    setSearchHistory((prevHistory) => [searchTerm, ...prevHistory.slice(0, 2)]);
  };

  const getCharacter = (input) => {
    if (!isNaN(input) && characterList[input]) {
      fetch(`https://thronesapi.com/api/v2/Characters/${input}`)
        .then((resp) => resp.json())
        .then((character) => {
          showCharacter(character);
          updateSearchHistory(character.fullName);
        })
        .catch((error) => {
          console.error('Erro no fetch:', error);
        });
    } else {
      const character = characterList.find(({ fullName }) => fullName === input);
      if (character) {
        fetch(`https://thronesapi.com/api/v2/Characters/${character.id}`)
          .then((resp) => resp.json())
          .then((character) => {
            showCharacter(character);
            updateSearchHistory(`${character.fullName}`);
          })
          .catch((error) => {
            console.error('Erro no fetch:', error);
          });
      } else {
        console.log('Personagem não encontrado');
      }
    }
  };

  const showCharacter = (character) => {
    const characterName = document.getElementById("characterName");
    characterName.innerHTML = `${character.firstName} ${character.lastName}`;

    const characterTitle = document.getElementById("characterTitle");
    characterTitle.innerHTML = `${character.title}`;

    const characterFullname = document.getElementById("characterFullname");
    characterFullname.innerHTML = `${character.fullName}`;

    const characterFamily = document.getElementById("characterFamily");
    characterFamily.innerHTML = `${character.family}`;

    const characterId = document.getElementById("characterId");
    characterId.innerHTML = `${character.id}`;

    document.getElementById("characterImage").src = character.imageUrl;
  };

  return (
    <AppContext.Provider value={{ characterList, searchHistory, getCharacter }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
