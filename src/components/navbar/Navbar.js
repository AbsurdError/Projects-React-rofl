import React from "react";
export const Navbar = () =>{
    return(
        <nav>
            <ul className="ul__header">
                <li><a href="/">Главная</a></li>
                <li><a href="/calc">Калькулятор</a></li>
                <li><a href="/sample">Выборки</a></li>
                <li><a href="/info">Информация</a></li>
            </ul>
        </nav>
    )
}