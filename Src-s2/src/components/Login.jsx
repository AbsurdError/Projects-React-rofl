import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
export default function Login({setIsAuth , setActiveUser}){
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        fetch('http://localhost:3005/users')
        .then(data => data.json())
        .then(data => setUsers(data))
        .catch(error => console.error('Error fetching users:', error));
    }, [])
    function login(event) {
        event.preventDefault();
        let user = users.find(user => user.name === name && user.password === password);
        if (user) {
            setIsAuth(true);
            setError('');
            navigate('/');
            setActiveUser(user.id);
        } else {
            setError('Некорректные данные');
        }
    }
    return (
        <div>
            <form className="form">
                <h1>Authorization</h1>
                <p className="error">{error}</p>
                <label>
                    Name: 
                    <input value={name} type="text" className="input" placeholder="Name" onChange={event => setName(event.target.value)}/>
                </label>
                <label>
                    Password: 
                    <input value={password} type="text" className="input" placeholder="Password" onChange={event => setPassword(event.target.value)}/>
                </label>
                <button onClick={login}>Login</button>
                <button onClick={() => navigate('/')}>Back</button>
            </form>
        </div>
    )
}