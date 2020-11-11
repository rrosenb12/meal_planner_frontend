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
    default: {
      return state;
    }
  }
}
