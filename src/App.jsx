import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Aside from "./components/aside";
import Main from "./components/main";
import Section from "./components/section";
import Footer from "./components/footer";

function App() {
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

  return (
    <>
      <Header />
      <Aside characterList={characterList} updateSearchHistory={updateSearchHistory} />
      <Main characterList={characterList} />
      <Section searchHistory={searchHistory} />
      <Footer />
    </>
  );
}

export default App;
