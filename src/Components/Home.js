import React from "react";
import MenuLeft from "./MenuLeft";
import MenuRight from "./MenuRight";
import { connect } from "react-redux";

function Home(props) {
  return (
    <div className="home-page">
      <div className="menu-wrapper">
        <h1>hi, {props.currentUser.username}</h1>
        <h3>this week's menu</h3>
        <p>
          able toasdfasdfasdfasdfasdfasdfasd sasdfasdfasdfasdfasdf
          asdfasdfasdfasdf fasdfasdfasdfasdfasdfasdfasdfasdfasdf click for a
          preview then navigate to the calendar page
        </p>
        <div className="menu-sides">
          <MenuLeft className="menu-left" currentUser={props.currentUser} />
          <MenuRight className="menu-right" />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(Home);
