import { useState } from "react";
import { _saveQuestion } from "../_DATA";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const AddQuestionPage = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [optionOneText, setOptionOneText] = useState('')
  const [optionTwoText, setOptionTwoText] = useState('')
  const author = useSelector(state => state.login.user.id)
  const handleOptionOne = (e) => {
    setOptionOneText(e.target.value)
  };

  const handleOptionTwo = (e) => {
    setOptionTwoText(e.target.value)
  }

  const handleCreate = (e) => {
    e.preventDefault()

    dispatch({ type: 'LOADING', data: true })
    _saveQuestion({
      optionOneText,
      optionTwoText,
      author
    })
      .then(() => {
        navigate('/')
      })
      .catch(e => alert(e))
      .finally(() => {
        dispatch({ type: 'LOADING', data: false })
      })
  }

  return (
    <form>
      <h1>Would You Rather</h1>
      <p>
        <label>Option one:</label>
        <input value={optionOneText} onChange={handleOptionOne} type="text" />
      </p>
      <p>
        <label>Option two:</label>
        <input value={optionTwoText} onChange={handleOptionTwo} type="text" />
      </p>
      <button onClick={handleCreate}>Create question</button>
    </form>
  )
}