import React from "react";
import { BackgroundBeams } from "./components/ui/background-beams";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <BackgroundBeams />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
