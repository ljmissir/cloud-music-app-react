import React, { useEffect, useState } from "react";
import request from "../../services";
import { SearchBar } from "antd-mobile";
import "./index.scss";

export default function Search() {
  const [hots, setHots] = useState([]);

  // 热搜榜
  const renderHots = (hots) => {
    return hots.map((item, index) => {
      return (
        <div className="hots-item" key={item.content}>
          <span className={`num ${index < 4 ? "hot" : ""}`}>{index + 1}</span>
          <div className="info">
            <p className="search-word">
              <span className="search">{item.searchWord}</span>
              <img src={item.iconUrl} alt="" />
            </p>
            <p className="content">{item.content}</p>
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    request.queryHotSearchDetail().then((res) => {
      console.log(res, 121);
      setHots(res.data);
    });
  }, []);
  return (
    <div className="search-wrapper">
      <SearchBar />
      <div className="hots-list">{!!hots.length && renderHots(hots)}</div>
    </div>
  );
}
