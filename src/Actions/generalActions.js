export const createUserCalendar = (userID, month, dispatch) => {
  fetch(`http://localhost:3000/calendars`, {
    method: "POST",
    headers: {
      accepts: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({ month: month, user_id: userID }),
  })
    .then((response) => response.json())
    .then((response) => toTheReducer(response, dispatch));
};

export const toTheReducer = (response, dispatch) => {
    dispatch({type: 'CREATE_CALENDAR', payload: response})
}
