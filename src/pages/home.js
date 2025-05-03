import { useSelector } from "react-redux"
import { Link } from 'react-router'
export const HomePage = () => {

  const questions = useSelector((state) => state.questions)
  const user = useSelector((state) => state.login.user)

  const hasVoted = ({ optionOne, optionTwo }) => {
    return optionOne.votes.includes(user.id) || optionTwo.votes.includes(user.id)
  }

  return (
    <>
      <h2>New Questions</h2>
      <ul>
        {Object.values(questions)
          .filter((question) => !hasVoted(question))
          .sort((a, b) => b.timestamp - a.timestamp)
          .map(question => {
            return (
              <li key={question.id}>
                <Link to={`/questions/${question.id}`}>{question.author} - {(new Date(question.timestamp).toString())}</Link>
              </li>
            )
          })}
      </ul>
      <h2>Done</h2>
      <ul>
        {Object.values(questions)
          .filter(hasVoted)
          .sort((a, b) => b.timestamp - a.timestamp)
          .map(question => {
            return (
              <li key={question.id}>
                <Link to={`/questions/${question.id}`}>{question.author} - {(new Date(question.timestamp).toString())}</Link>
              </li>
            )
          })}
      </ul>
    </>
  )
}
