import React from 'react';
import './App.css';
//import './Auth.js';
import RoomBooking from './pages/RoomBooking';

import Home from './pages/Home';
import { Rooms } from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

import Navbar from './components/Navbar';

import { Route, Routes } from 'react-router-dom'; 



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/book-now" element={<RoomBooking/>}/>
        <Route path="/rooms/:slug" element={<SingleRoom />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
