export default function reducer(state = 0, action) {
  switch (action.type) {
    case 'HOME_TAB':
      return action.data;
    default:
      return state;
  }
}
