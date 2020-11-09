import React from "react";
import MenuLeft from "./MenuLeft";
import MenuRight from "./MenuRight";
import { connect } from "react-redux";

function Home(props) {
  return (
    <div className="home-page">
      {/* {console.log(props.currentUser)} */}
      <h1>hi, {props.currentUser.username}</h1>
      <menu-wrapper>
        <MenuLeft currentUser={props.currentUser} />
        <MenuRight />
      </menu-wrapper>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(Home);
