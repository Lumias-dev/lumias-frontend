import React from "react";
import {
  Navbar,
  Header,
  Popular,
  Updates,
  Chart,
  Trending,
  Footer,
} from "./components";
import "./App.css";
import "./fonts/PoppinsMedium.ttf";

function App() {
  return (
    <div className="App">
      <div className="background">
        <Navbar />
        <Header />
      </div>
      <Popular />
      <Updates />
      <Chart />
      <Trending />
      <div className="footer-bg">
        <Footer />
      </div>
    </div>
  );
}

export default App;
