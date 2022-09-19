import React from "react";
import Header from "./Components/Header/HeaderComponent";
import Main from "./Components/Main/MainComponent";
import { GlobalStyle } from "./GlobalStyle";

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Main />
    </div>
  );
}


