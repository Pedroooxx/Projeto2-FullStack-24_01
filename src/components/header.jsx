import header from "./stylesheets/header.css";

const Header = () => {
  const hora = new Date().getHours();

  function recepcao () {
    let txt ="";

    if(hora < 12) txt ="Bom dia!"
    else if (hora < 18) txt = "Boa tarde!"
    else txt = "Boa noite!"
    return <p>{txt}</p>
  }

  return (
    <header className="header">
      <h1>Header</h1>
      <h2 className="recepcao">{recepcao()}</h2>
    </header>
  );
};

export default Header;
