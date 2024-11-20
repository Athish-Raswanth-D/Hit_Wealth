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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<App />}></Route>
      <Route path = "/about" element = {<About/>}></Route>
      <Route path = "/Learning" element = {<Learning/>}></Route>
      <Route path="/stocks" element={<Stocks/>} />

    </Routes>
  </BrowserRouter>
);

