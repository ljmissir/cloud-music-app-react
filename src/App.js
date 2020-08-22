import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CloudRoute from "./router";

function App(props) {
  const { songUrl } = props.song;
  return (
    <div className="App">
      <audio style={{ display: "none" }} src={songUrl} autoPlay></audio>
      <CloudRoute />
    </div>
  );
}

export default connect(({ song }) => ({ song }))(App);
