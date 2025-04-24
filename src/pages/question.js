import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { handleLoadData, handleSaveQuestionAnswer } from "../actions"

export const QuestionPage = () => {
  const { question_id } = useParams()
  const dispatch = useDispatch()

  const question = useSelector(state => state.questions[question_id])
  const users = useSelector(state => state.users)
  const user = useSelector(state => state.login.user)
  const author = users[question.author]
  const hasVoted = question.optionOne.votes.includes(user.id) || question.optionTwo.votes.includes(user.id)

  const numVotedOptionOne = question.optionOne.votes.length;
  const numVotedOptionTwo = question.optionTwo.votes.length;
  const percentOptionOne = Number(numVotedOptionOne / (numVotedOptionOne + numVotedOptionTwo) * 100).toFixed(2)
  const percentOptionTwo = Number(numVotedOptionTwo / (numVotedOptionOne + numVotedOptionTwo) * 100).toFixed(2)

  const handleVote = (answer) => {
    dispatch(handleSaveQuestionAnswer({
      qid: question.id,
      authedUser: user.id,
      answer
    }))
    dispatch(handleLoadData())
  }

  return (
    <div>
      <h1>Would you rather?</h1>
      <img className="avatar" alt="avatar" src={author.avatarURL} />
      <p>{author.id}</p>
      <p>{new Date(question.timestamp).toDateString()}</p>
      <div className="votes">
        <div className="vote">
          <p>
            {question.optionOne.text}
          </p>
          <p>{hasVoted
            ? <>{numVotedOptionOne} Votes - {percentOptionOne}%</>
            : <button onClick={() => handleVote('optionOne')}>Vote</button>}
          </p>
        </div>
        <div className="vote">
          <p>{question.optionTwo.text}</p>
          <p>{hasVoted
            ? <>{numVotedOptionTwo} Votes - {percentOptionTwo}%</>
            : <button onClick={() => handleVote('optionTwo')}>Vote</button>
          }</p>
        </div>
      </div>
    </div>
  )
}