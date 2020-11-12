let defaultState = {
  calendar: null,
};

export default function calendarReducer(state = defaultState, action) {
  switch (action.type) {
    case "GENERAL_CALENDAR":
      return {
        ...state,
        calendar: action.payload
      };
    default:
      return state;
  }
}
