import { useSelector } from "react-redux"

export const LeaderboardPage = () => {

  const users = useSelector(state => state.users)
  const questions = useSelector(state => state.questions)

  return (

    <div className="shadow-md">
      <table className="border-collapse w-full text-left">
        <thead>
          <tr className="bg-pink-100">
            <th className="border border-pink-100 p-2">Users</th>
            <th className="border border-pink-100 p-2">Answers</th>
            <th className="border border-pink-100 p-2">Created</th>
          </tr>
        </thead>
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
                  <td className="border border-pink-100 p-2">
                    <img className="avatar" alt='avatar' src={user.avatarURL} />
                    {user.id}
                  </td>
                  <td className="border border-pink-100 p-2">{answered}</td>
                  <td className="border border-pink-100 p-2">{created}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}