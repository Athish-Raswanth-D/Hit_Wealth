import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Stock from "../Stocks";
import Livetrading from "./livetrading";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <h1>Practice JSX and CSS</h1>
        <div className="button-container">
          <Link to="/stock" className="custom-button">
            Stock Information
          </Link>
          <Link to="/live-trading" className="custom-button">
            Live Trading
          </Link>
        </div>
      </div>
    </Router>
  );
};

export default App;
