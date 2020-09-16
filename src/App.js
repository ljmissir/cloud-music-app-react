import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CloudRoute from "./router";
import TabBar from "./components/TabBar";
import "./static/iconfont/iconfont.css";

function App(props) {
  const [showTabBar, setShowTabBar] = useState(true);

  const { songUrl } = props.song;

  useEffect(() => {
    const isLogin = window.location.hash.indexOf("login") === -1;
    setShowTabBar(isLogin);
  });

  return (
    <div className="App" style={{ height: "100%" }}>
      <audio style={{ display: "none" }} src={songUrl} autoPlay></audio>
      <CloudRoute />
      {showTabBar ? <TabBar /> : null}
    </div>
  );
}

export default connect(({ song }) => ({ song }))(App);
