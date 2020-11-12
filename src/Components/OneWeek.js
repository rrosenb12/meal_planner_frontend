import React from "react";
import { connect } from "react-redux";

function OneWeek(props) {
  return <ul className="week">{props.calendar && getWeek(props.calendar)}</ul>;
}

const getWeek = (calendar) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const d = calendar.filter(
    (date) => date.year === year && date.month === month && date.day === day
  );
  const sunday =
    d.day_of_week !== 0
      ? calendar[calendar.indexOf(d[0]) - (calendar.indexOf(d[0]) - 1)]
      : d;
  const startingIndex = calendar.indexOf(sunday);
  const sevenDays = calendar.slice(startingIndex, 8);
  return sevenDays.map((day) => (
    <li key={day.id}>
      {day.month}/{day.day}/{day.year}
    </li>
  ));
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    calendar: state.calendar.calendar,
  };
};

export default connect(mapStateToProps)(OneWeek);
