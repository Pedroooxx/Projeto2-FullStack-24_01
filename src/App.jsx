import React from "react";
import "./App.css";
import Header from "./components/header";
import Aside from "./components/aside";
import Main from "./components/main";
import Section from "./components/section";
import Footer from "./components/footer";
import { AppProvider } from "./AppContext";

function App() {
  return (
    <AppProvider>
      <Header />
      <Aside />
      <Main />
      <Section />
      <Footer />
    </AppProvider>
  );
}

export default App;