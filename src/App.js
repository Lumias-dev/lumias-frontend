import React from "react";
import { Navbar, About, Docs, News, Footer } from "./components";
import "./App.css";
import "./fonts/PoppinsMedium.ttf";
import Home from "./Home";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/home":
      component = <Home />;
      break;
    case "/news":
      component = <News />;
      break;
    case "/docs":
      component = <Docs />;
      break;
    case "/about":
      component = <About />;
      break;
  }

  return (
    <div className="App">
      <div className="background">
        <Navbar />
        {component}
      </div>
      <div className="footer-bg">
        <Footer />
      </div>
    </div>
  );
}

export default App;
