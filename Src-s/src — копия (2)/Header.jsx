import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Header(){
    const navigate = useNavigate();
    function changePage(page){
        navigate(page)                                                               
    }
    return (
        <div>
            <nav>
                <Link to='/one'>
                    Page One
                </Link>
                <br/>
                <Link to='/two'>
                    Page Two
                </Link>
            </nav>
            <div>
                <button onClick={() => changePage('one')}>One</button>
                <button onClick={() => changePage('two')}>Two</button>
            </div>
            <Outlet/>
        </div>
    )
}