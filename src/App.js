import React from "react";
import {
  Navbar,
  Header,
  Popular,
  Updates,
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
      <div>
        <Popular />
        <Updates />
        <Trending />
        <div className="footnote-bg">
          <Footnotes />
        </div>
      </div>
    </div>
  );
}

export default App;
