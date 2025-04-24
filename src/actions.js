import { _getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer } from "./_DATA"

export function handleLoadData() {
  return async (dispatch) => {
    dispatch({ type: 'LOADING', data: true })

    const [questions, users] = await Promise.all([
      _getQuestions(),
      _getUsers()
    ])

    dispatch({ type: 'QUESTIONS', data: questions })
    dispatch({ type: 'USERS', data: users })
    dispatch({ type: 'LOADING', data: false })
  }
}

export function handleSaveQuestion({ optionOneText, optionTwoText, author }) {
  return async (dispatch) => {
    dispatch({ type: 'LOADING', data: true })
    await _saveQuestion({
      optionOneText,
      optionTwoText,
      author
    })
      .catch(e => alert(e))
      .finally(() => {
        dispatch({ type: 'LOADING', data: false })
      })
  }
}

export const handleSaveQuestionAnswer = ({
  authedUser,
  qid,
  answer
}) => {
  return async (dispatch) => {
    dispatch({ type: "LOADING", data: true })
    _saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      // todo
    }).finally(() => {
      dispatch({ type: "LOADING", data: false })
    })
  }
}