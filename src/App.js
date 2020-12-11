import React, { useState, useEffect, useMemo } from "react";
import { connect } from "react-redux";
import RouterWrap from "./router";
import TabBar from "./components/TabBar";
import "./static/iconfont/iconfont.css";

function App(props) {
  const [showTabBar, setShowTabBar] = useState(true);
  const { dispatch } = props;
  let { curIndex, playList } = props.song;

  const songUrl = useMemo(() => {
    return !!playList.length
      ? `https://music.163.com/song/media/outer/url?id=${playList[curIndex].id}.mp3`
      : "";
  }, [curIndex]);

  const onEnded = () => {
    console.log("播放完成，自动播放下一首");
    curIndex++;
    if (curIndex === playList.length) {
      curIndex = 0;
    }
    dispatch({ type: "SET_CUR_INDEX", curIndex });
  };

  useEffect(() => {
    const isLogin = window.location.hash.indexOf("login") === -1;
    setShowTabBar(isLogin);
  }, [showTabBar]);

  return (
    <div className="App" style={{ height: "100%" }}>
      <audio
        style={{ display: "none" }}
        src={songUrl}
        autoPlay
        onEnded={() => onEnded()}
      ></audio>
      <RouterWrap />
      {showTabBar ? <TabBar /> : null}
    </div>
  );
}

export default connect(({ song }) => ({ song }))(App);
