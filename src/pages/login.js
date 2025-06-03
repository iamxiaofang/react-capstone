import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Input, Button } from "../components";

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
    <div className="flex justify-center items-center h-screen">
      <Box>
        <p className="flex flex-col w-full">
          <label htmlFor="username">Username: </label>
          <Input data-testid="username" onChange={handleUsernameChange} value={username} name="username" text="text" />
        </p>

        <p className="flex flex-col w-full">
          <label htmlFor="password">Password: </label>
          <Input data-testid="password" onChange={handlePasswordChange} value={password} name="password" type="text" />
        </p>

        <Button className="w-full" data-testid="login-button" onClick={handleLogin}>Login</Button>
      </Box>
    </div>
  )
}