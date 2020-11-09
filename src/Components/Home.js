import React from "react";
import MenuLeft from "./MenuLeft";
import MenuRight from "./MenuRight";
import { connect } from "react-redux";

function Home(props) {
  return (
    <div className="home-page">
      <div className="menu-wrapper">
        <section className="open-menu">
          <article>
            <h1>hi, {props.currentUser.username}</h1>
            <MenuLeft className="menu-left" currentUser={props.currentUser} />
            <MenuRight className="menu-right" />
          </article>
        </section>
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
