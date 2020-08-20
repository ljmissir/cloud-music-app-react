import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CloudRoute from "./router";

function App(props) {
  console.log(props, 12);
  const [songUrl] = useState(props.song.songUrl);
  useEffect(() => {
    console.log(props.song, 888);
  });
  return (
    <div className="App">
      <audio style={{ display: "none" }} src={songUrl} autoPlay></audio>
      <CloudRoute />
    </div>
  );
}

export default connect(({ song }) => ({ song }))(App);
