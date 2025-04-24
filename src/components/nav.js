import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
export const Nav = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.user)
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })

  }
  return (
    <div className='nav'>
      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/leaderboard">Leaderboard</NavLink></li>
        <li><NavLink to="/add">Add Question</NavLink></li>
      </ul>
      <ul className='nav-login'>
        <li>{user.id}</li>
        <button onClick={handleLogout}>Logout</button>
      </ul>
    </div>
  )
}