import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { handleLoadData, handleSaveQuestionAnswer } from "../actions"
import { Button } from "../components"

export const QuestionPage = () => {
  const { question_id } = useParams()
  const dispatch = useDispatch()
  const question = useSelector(state => state.questions[question_id])
  const users = useSelector(state => state.users)
  const user = useSelector(state => state.login.user)

  if (!question) {
    return "Not Found"
  }


  const author = users[question.author]
  const hasVoted1 = question.optionOne.votes.includes(user.id)
  const hasVoted2 = question.optionTwo.votes.includes(user.id)
  const hasVoted = hasVoted1 || hasVoted2
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
        <div className={`vote ${hasVoted1 ? 'voted' : ''}`}>
          <p>
            {question.optionOne.text}
          </p>
          <p>{hasVoted
            ? <>{numVotedOptionOne} Votes - {percentOptionOne}%</>
            : <Button onClick={() => handleVote('optionOne')}>Vote</Button>}
          </p>
        </div>
        <div className={`vote ${hasVoted2 ? 'voted' : ''}`}>
          <p>{question.optionTwo.text}</p>
          <p>{hasVoted
            ? <>{numVotedOptionTwo} Votes - {percentOptionTwo}%</>
            : <Button onClick={() => handleVote('optionTwo')}>Vote</Button>
          }</p>
        </div>
      </div>
    </div>
  )
}