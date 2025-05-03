import { Routes, Route } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import "./App.css";
import { HomePage, LeaderboardPage, AddQuestionPage, QuestionPage, LoginPage } from "./pages";
import { Nav } from './components'

import { handleLoadData } from './actions';

function App() {

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading)

  useEffect(() => {
    dispatch(handleLoadData())
  }, [dispatch])

  const user = useSelector((state) => state.login.user)

  if (loading) {
    return 'Loading....'
  }


  if (!user) {
    return <LoginPage />
  }

  return (
    <>
      <Nav />
      <div className="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/add" element={<AddQuestionPage />} />
          <Route path="/questions/:question_id" element={<QuestionPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
