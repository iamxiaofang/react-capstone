import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { handleLoadData, handleSaveQuestion } from "../actions";
import { Input, Button } from "../components";
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
    dispatch(handleSaveQuestion({ optionOneText, optionTwoText, author }))
    dispatch(handleLoadData())
    navigate('/')
  }

  return (

    <form className="flex flex-col gap-4 w-[400px]">
      <h1 className="text-2xl">Would You Rather</h1>

      <div className="flex flex-col w-full gap-2">
        <label>Option one:</label>
        <Input value={optionOneText} onChange={handleOptionOne} type="text" />
      </div>

      <div className="flex flex-col w-full gap-2">
        <label>Option two:</label>
        <Input value={optionTwoText} onChange={handleOptionTwo} type="text" />
      </div>

      <Button onClick={handleCreate}>Create question</Button>
    </form>

  )
}