import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import SpottingPage from "./SpottingPage";

function App() {
  function getPage() {
    const route = window.location.pathname;
    if (route === "/spotting") return <SpottingPage />;
    if (route === "/about") return <AboutPage />;
    return <HomePage />;
  }
  return <div className="container-fluid">
    <Header />
    { getPage() }
  </div>;
}

export default App;
