import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        {/* Route pour la page d'accueil */}
        {/* Ajoutez d'autres routes ici */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
