export default function questions(state = false, action) {
  switch (action.type) {
    case 'LOADING':
      return action.data;
    default:
      return state;
  }
}
