import { useState } from "react";
import "./App.css";
import NavBar from "./components/navBar/Navbar";
import About from "./components/About/About";
import Weather from "./components/InputField/SearchWeather";
import Support from "./components/Support/Support";

function App() {
  const [page, setPage] = useState("About");

  function changePage(webPage) {
    setPage(webPage);
  }

  return (
    <div className="App">
      <NavBar changePage={changePage} />
      {page === "About" ? (
        <About />
      ) : page === "Weather App" ? (
        <Weather />
      ) : page === "Support" ? (
        <Support />
      ) : null}
    </div>
  );
}

export default App;
