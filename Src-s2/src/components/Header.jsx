import React from "react";
import { Link } from "react-router-dom";
export default function Header({isAuth, setIsAuth}){
    function handleLogout() {
        setIsAuth(false); 
      }
    let menu;
    if (!isAuth){
        menu = <>
                    <li className="header__item">
                        <Link to={'/'}>Main</Link>
                    </li>
                    <li className="header__item">
                        <Link to={'/login'}>Login</Link>
                    </li>
                    <li className="header__item">
                        <Link to={'/reg'}>Registration</Link>
                    </li>
        </>
    } else {
       menu = <>
                    <li className="header__item">
                        <Link to={'/'}>Main</Link>
                    </li>
                    <li className="header__item">
                        <Link to={'/cart'}>Cart</Link>
                    </li>
                    <li className="header__item">
                        <Link to="/order">Order</Link>
                    </li>
                    <li className="header__item">
                        <Link to="/logout" onClick={handleLogout}>Logout</Link>
                    </li>
       </> 
    }
    return (
        <div className="Header">
            <nav className="header__wrap">
                <ul className="header__menu">
                    {menu}
                </ul>
            </nav>
        </div>
    )
}