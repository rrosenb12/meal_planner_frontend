let defaultState = {
  calendar: null,
};

export default function generalReducer(state = defaultState, action) {
  switch (action.type) {
    case "CREATE_CALENDAR":
      return {
        ...state,
        calendar: action.payload,
      };
    case "SET_CALENDAR":
      return {
        ...state,
        calendar: action.payload[0],
      };
    default: {
      return state;
    }
  }
}
