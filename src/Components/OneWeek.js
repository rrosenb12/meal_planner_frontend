import React from "react";
import { connect } from "react-redux";

function OneWeek(props) {
  return <>{props.calendar && getDay(props.calendar)}</>;
}

const getDay = (calendar) => {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let d = calendar.filter(
    (date) => date.year === year && date.month === month && date.day === day
  );
  let startingIndex = calendar.indexOf(d[0])
  let sevenDays = calendar.slice(startingIndex, 7)
  console.log(sevenDays)
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    calendar: state.calendar.calendar,
  };
};

export default connect(mapStateToProps)(OneWeek);
