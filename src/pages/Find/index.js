import React, { useEffect, useState } from "react";
import request from "../../services/index";
import { SearchBar } from "antd-mobile";
import { connect } from "react-redux";
import Banner from "./banner";
import Tab from "./tab";
import SongList from "./songList";
import "./index.scss";

function Find(props) {
  const [hotSearch, setHotSearch] = useState("");

  // 去搜索页
  const toSearch = () => {
    props.history.push("/search");
  };

  // 获取热搜关键字
  const queryHotSearchKey = async () => {
    const result = await request.queryDefaultHotSearchKey();
    setHotSearch(result.data.showKeyword);
  };

  useEffect(() => {
    queryHotSearchKey();
    request.queryHomeBlockData().then((res) => {
      console.log(res, 111);
    });
  }, []);

  return (
    <div className="find-wrapper">
      <SearchBar placeholder={hotSearch} onFocus={toSearch} />
      <Banner />
      <Tab />
      <SongList />
    </div>
  );
}

export default connect(({ user }) => ({ user }))(Find);
