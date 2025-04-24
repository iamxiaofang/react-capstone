export default function users(state = {}, action) {
  switch (action.type) {
    case "USERS":
      return {
        ...state,
        ...action.data
      }
    default:
      return state;
  }
}
