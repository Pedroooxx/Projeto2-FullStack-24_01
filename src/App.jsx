// App.jsx
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Aside from "./components/aside";
import Main from "./components/main";
import Footer from "./components/footer";

function App() {
  const [characterList, setCharacterList] = useState([]);

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

  return (
    <>
      <Header />
      <Aside characterList={characterList} />
      <Main characterList={characterList} />
      <Footer />
    </>
  );
}

export default App;
