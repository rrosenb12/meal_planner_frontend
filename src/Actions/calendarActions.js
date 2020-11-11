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
    .then((response) => createCalendar(response, dispatch));
};

export const setCalendar = (userID, dispatch) => {
  fetch(`http://localhost:3000/calendars`)
    .then((response) => response.json())
    .then((response) =>
      setCurrentCalendar(
        response.filter((calendar) => calendar.user_id === userID),
        dispatch
      )
    );
};

export const createCalendar = (response, dispatch) => {
  dispatch({ type: "CREATE_CALENDAR", payload: response });
};

export const setCurrentCalendar = (calendar, dispatch) => {
  dispatch({ type: "SET_CALENDAR", payload: calendar });
};
