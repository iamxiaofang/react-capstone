export default function questions(state = {}, action) {
  switch (action.type) {
    case 'QUESTIONS':
      return {
        ...state,
        ...action.data,
      }
    default:
      return state;

  }
}
