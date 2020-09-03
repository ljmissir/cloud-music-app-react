import React from "react";
import { connect } from "react-redux";
import CloudRoute from "./router";
import TabBar from "./components/TabBar";
import { BrowserRouter as Router } from "react-router-dom";

function App(props) {
  console.log(props, "app.js");
  const { songUrl } = props.song;
  return (
    <div className="App" style={{ height: "100%" }}>
      <audio style={{ display: "none" }} src={songUrl} autoPlay></audio>
      <CloudRoute />
    </div>
  );
}

export default connect(({ song }) => ({ song }))(App);
