import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const LoginPage = () => {
  const [username, setUsename] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleUsernameChange = (e) => {
    setUsename(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleLogin = (e) => {
    e.preventDefault()

    const user = Object.values(users).find(u => u.id === username && u.password === password)
    if (user) {
      dispatch({
        type: 'LOGIN',
        data: user
      })
    } else {
      alert('Bad login')
    }
  }

  const users = useSelector((state) => state.users)

  return (
    <form>
      <p>
        <label htmlFor="username">Username: </label>
        <input data-testid="username" onChange={handleUsernameChange} value={username} name="username" text="text" />
      </p>

      <p>
        <label htmlFor="password">Password: </label>
        <input data-testid="password" onChange={handlePasswordChange} value={password} name="password" type="text" />
      </p>

      <button data-testid="login-button" onClick={handleLogin}>Login</button>
    </form>
  )
}