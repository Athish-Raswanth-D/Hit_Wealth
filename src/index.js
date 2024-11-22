import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import About from './components/About/About';
import Learning from './components/Learning/Learning';
import Stocks from './components/Stocks/Stocks';
import Stocknews from './components/Stocknews/Stocknews.jsx';
import Login from './components/login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import MutualFunds from './components/Mutualfunds/Mutualfunds';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<App />}></Route>
      <Route path = "/login" element = {<Login />}></Route>
      <Route path = "/about" element = {<About/>}></Route>
      <Route path = "/Learning" element = {<Learning/>}></Route>
      <Route path="/stocks" element={<Stocks/>} />
      <Route path="/stocknews" element={<Stocknews/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/dashboard" element={<MutualFunds/>} />
    </Routes>
  </BrowserRouter>
);

