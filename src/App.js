import React from "react";
import {
  Navbar,
  Header,
  Popular,
  Updates,
  Chart,
  Trending,
  Footnotes,
} from "./components";
import "./App.css";

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
      <div className="footnote-bg">
        <Footnotes />
      </div>
    </div>
  );
}

export default App;
