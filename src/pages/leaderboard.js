import { useSelector } from "react-redux"

export const LeaderboardPage = () => {

  const users = useSelector(state => state.users)
  const questions = useSelector(state => state.questions)

  return (
    <table className="leaderboard">
      <thead><tr><th>Users</th><th>Answers</th><th>Created</th></tr></thead>
      <tbody>
        {Object.values(users)
          .map((user) => {
            const answered = Object.keys(user.answers).length
            const created = Object.values(questions).filter(q => q.author === user.id).length
            return {
              user,
              answered,
              created
            }
          })
          .sort((a, b) => (b.answered + b.created) - (a.answered + a.created))
          .map(({ user, answered, created }) => {
            return (
              <tr key={user.id}>
                <td>
                  <img className="avatar" alt='avatar' src={user.avatarURL} />
                  {user.id}
                </td>
                <td>{answered}</td>
                <td>{created}</td>
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}