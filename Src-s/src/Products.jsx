import React, { useEffect, useState } from "react";

function Products(){
    const [films, setFilms] = useState([]);
    const [isOnline, setIsOnline] = useState(false);
  
    useEffect(() => {
      async function getFilms() {

          const response = await fetch('https://swapi.py4e.com/api/films/');
          const data = await response.json();
          setFilms(data.results);
        }
  
        const savedOnline = localStorage.getItem("online");
        if (savedOnline) {
          const online = JSON.parse(savedOnline);
          setIsOnline(online);
        }
  
      getFilms();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("online");
        setIsOnline(false);
      };
  
    if (isOnline) {
      const printFilms = films.map((film, index) => {
        return (
          <div className="Product" key={index}>
            <h3>{film.title}</h3>
            <p>Director: {film.director}</p>
            <p>Release date: {film.release_date}</p>
          </div>
        );
      });
  
      return <><button className="btn" onClick={handleLogout}>Logout</button><div className="Products">{printFilms}</div></>;
    } else {
      return (
        <div className="Products">
          <div className="Product">
            <p>No products available</p>
          </div>
        </div>
      );
    }
  }

export const Productss = () => Products();