import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// let psw = document.getElementById("psw");
// psw.className += "Error";
function Registration() {
  const navigate = useNavigate()
  const [name, setName] = useState("Users");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    if (password.length < 8 || name === "" || !validateEmail(email)) {
        if (password.length < 8) {
          alert("Password must be at least 8 characters long");
          let psw = document.getElementById("psw");
          psw.className += "Error";
        }
        if (name === "") {
          alert("Name cannot be empty");
          let lg = document.getElementById("lg");
          lg.className += "Error";
        }
        if (!validateEmail(email)) {
          alert("Invalid email format");
          let em = document.getElementById("em");
          em.className += "Error";
        }
        return;
      }
    const newUser = {
      name,
      email,
      password,
    };
    localStorage.setItem("user", JSON.stringify(newUser));
    setName("");
    setEmail("");
    setPassword("");
    navigate("/authorization")
  }

  console.log(name, email, password);
  return (
    <div className="formRegistration">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <label id="lg">
          Name:
          <input id="lg"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Login"
          />
        </label>
        <br />
        <label id="em">
          Email:
          <input id="em"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
          />
        </label>
        <br />
        <label id="psw">
          Password:
          <input id="psw"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="********"
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export const Registrations = () => Registration();