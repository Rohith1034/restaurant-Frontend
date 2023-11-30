import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from "./components/Login"
import Profile from './components/Profile';
import Register from './components/Register';
import Logout from './components/Logout';
import Dashboard from './components/Dashboard';
import { SkeletonTheme } from 'react-loading-skeleton';
import FoodItems from "./components/FoodItems"

/*  */

function App() {
  return (
    <Router>
      <div className="App">
        <SkeletonTheme baseColor="#313131" highlightColor='#525252'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/fooditems/:id' element={<FoodItems />} />
          </Routes>
        </SkeletonTheme>
      </div>
    </Router>
  );
}

export default App;
