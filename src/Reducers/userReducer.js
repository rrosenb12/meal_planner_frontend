let defaultState = {
  currentUser:
    localStorage.getItem("user") === undefined
      ? null
      : JSON.parse(localStorage.getItem("user")),
  token: localStorage.getItem("token"),
  error: null,
};

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case "SET_USER":
      return state.currentUser;
    case "CREATE_USER":
      return {
        ...state,
        currentUser: action.currentUser,
        token: action.payload,
      };
    case "LOGIN_USER":
      return {
        ...state,
        currentUser: action.currentUser,
        token: action.payload,
      };
    default:
      return state;
  }
}
