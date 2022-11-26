// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoardPage from './Pages/DashBoardPage';
import Compare from './Pages/Compare';
import Home from './Pages/Home';
import CoinPage from './Pages/Coin';
import axios from 'axios';
import { useEffect, useState } from 'react'
import WatchListPage from './Pages/watchlist';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashBoardPage />} />
          <Route path="/coin/:id" element={<CoinPage />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/watchlist" element={<WatchListPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
