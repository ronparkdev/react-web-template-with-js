import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import DetailPage from "./pages/Detail";
import HomePage from "./pages/Home";

function App() {
  return (
    <Router>
      <main>
        <div className="App">
          <Routes>
            <Route path="/details/:detailId" element={<DetailPage />} />
            <Route exact path="/" element={<HomePage />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
