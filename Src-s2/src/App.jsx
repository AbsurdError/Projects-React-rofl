import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import Login from './components/Login';
import Registration from './components/Registration';
import Cart from './components/Cart';
import Order from './components/Order';
import Header from './components/Header';

function App() {
  const [isAuth, setIsAuth] = useState(true);
  const[activeUser, setActiveUser] = useState(null)
  return (
    <div className="App">
      <Header isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path='/' element={<Products isAuth={isAuth} activeUser={activeUser} />} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} setActiveUser={setActiveUser} />} />
        <Route path='/reg' element={<Registration />} />
        <Route path='/cart' element={<Cart activeUser={activeUser} />} />
        {activeUser && <Route path='/order' element={<Order activeUser={activeUser} />} />}
      </Routes>
    </div>
  );
}

export default App;