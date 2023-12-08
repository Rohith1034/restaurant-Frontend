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
import RestaurantDashboard from './components/Restaurant/RestaurantDashboard';
import RestaurantRegister from './components/Restaurant/RestaurantRegister';
import RestaurantLogin from './components/Restaurant/RestaurantLogin';
import RestaurantAddItem from './components/Restaurant/RestarantAddItem';
import RestaurantFoodItems from './components/Restaurant/RestaurantFoodItems';
import RestaurantEditFoodItem from './components/Restaurant/RestaurantEditFoodItem';
import Wishlist from './components/Wishlist';
/*  */

function App() {
  return (
    <Router>
      <div className="App">
        <SkeletonTheme baseColor="#313131" highlightColor='#525252'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='user/profile' element={<Profile />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/fooditems/:id' element={<FoodItems />} />
            <Route path='/restaurant/dashboard' element={<RestaurantDashboard />}/>
            <Route path='/restaurant/register' element={<RestaurantRegister />} />
            <Route path='/restaurant/login' element={<RestaurantLogin />} />
            <Route path='/restaurant/additem' element={<RestaurantAddItem/>} />
            <Route path='/restaurant/fooditems/:id' element={<RestaurantFoodItems/>} />
            <Route path='/restaurant/fooditems/edit/:Id' element={<RestaurantEditFoodItem />} />
            <Route path='/user/wishlist' element={<Wishlist  />} />
          </Routes>
        </SkeletonTheme>
      </div>
    </Router>
  );
}

export default App;
