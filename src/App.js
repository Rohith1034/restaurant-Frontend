import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from "./components/Login"
import Profile from './components/Profile';
import Register from './components/Register';
import Logout from './components/Logout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
