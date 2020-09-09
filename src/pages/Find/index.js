import React from "react";
import Header from "./header";
import Banner from "./banner";
import Tab from "./tab";
import SongList from "./songList";
import "./index.scss";

function Find() {
  return (
    <div className="find-wrapper">
      <Header />
      <Banner />
      <Tab />
      <SongList />
    </div>
  );
}

export default Find;
