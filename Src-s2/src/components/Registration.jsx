import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
export default function Registration(){
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState('')
    const navigate = useNavigate()
    function registration(event) {
        event.preventDefault();
        if (name && password && password === password2) {
            const newUser = { 
                name, 
                password, 
                avatarUrl: '' 
            };
            fetch('http://localhost:3005/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser)
            })
            .then(response => {
                if (response.ok) {
                    navigate('/login'); 
                } else {
                    throw new Error('Failed to register user');
                }
            })
            .catch(error => {
                console.error('Error registering user:', error);
                setError('Failed to register user');
            });
        } else {
            setError('Пароли не совподают');
        }
    }
    return (
        <div>
            <form className="form">
                <h1>Registration</h1>
                <p className="error">{error}</p>
                <label>
                    Name: 
                    <input value={name} type="text" className="input" placeholder="Name" onChange={event => setName(event.target.value)}/>
                </label>
                <label>
                    Password: 
                    <input value={password} type="text" className="input" placeholder="Password" onChange={event => setPassword(event.target.value)}/>
                </label>
                <label>
                    Password2: 
                    <input value={password2} type="text" className="input" placeholder="Password2" onChange={event => setPassword2(event.target.value)}/>
                </label>
                <button onClick={registration}>registration</button>
                <button onClick={() => navigate('/')}>Back</button>
            </form>
        </div>
    )
}