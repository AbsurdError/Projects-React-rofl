import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Authorization() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  function handleSubmit(event) {
    event.preventDefault();
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const user = JSON.parse(savedUser);
      if (user.email === email && user.password === password) {
        console.log("Авторизация:", email, password);
        setEmail("");
        setPassword("");
        navigate('*')
        const isOnline = true;
        localStorage.setItem("online", JSON.stringify(isOnline));
      } else {
        console.log("Неверный email или пароль");
      }
    } else {
      console.log("Пользователь не зарегистрирован");
    }
  }

  return (
    <div className="formAuthorization">
      <h2>Authorization</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export const Authorizations = () => Authorization();
