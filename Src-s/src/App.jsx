import React, { useState } from "react";
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import { Registrations } from './Registration';
import { Authorizations } from './Authorization';
import { AboutUss } from './AboutUs';
import { Productss } from './Products';

function App() {
    const location = useLocation();
    const [user, setUser] = useState(null);
    
    const handleUserRegistration = (userData) => {
        setUser(userData);
    };

    console.log(location.pathname);
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home user={user} />} >
                    <Route index element={<div>Lorem ipsum dolor sit amet.</div>} />
                    <Route path='#' element={<div>Page not found</div>} />
                    <Route path='/registration' element={<Registrations onUserRegistration={handleUserRegistration} />} /> 
                    <Route path='/authorization' element={<Authorizations user={user} />} />
                    <Route path='/about-us' element={<AboutUss />} />
                    <Route path='*' element={<Productss />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;