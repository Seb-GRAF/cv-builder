import "./styles/App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import React from "react";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Main />
    </div>
  );
};
export default App;
