export const fetchCalendar = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/calendars')
    .then(response => response.json())
    .then(response => {
      dispatch({type: "GENERAL_CALENDAR", payload: response})
    })
  }
}