import React, { useEffect, useState } from "react";
import { SearchBar } from "antd-mobile";
import request from "../../services/index";
import { withRouter } from "react-router-dom";

function Header(props) {
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
  }, []);

  return (
    <div className="header">
      <SearchBar placeholder={hotSearch} onFocus={toSearch} />
    </div>
  );
}

export default withRouter(Header);
