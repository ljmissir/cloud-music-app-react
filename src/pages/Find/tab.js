import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import request from "../../services";

function Tab() {
  const [tabList, setTabList] = useState([]);
  const [curDate, setCurDate] = useState("");

  // 获取当前日期
  const getCurDate = () => {
    let date = new Date().getDate();
    date = date < 10 ? "0" + date : date;
    return date;
  };

  const queryTabList = async () => {
    const result = await request.queryHomePageBall();
    setTabList(result.data.splice(0, 5));
  };

  const resolvePath = (tab) => {
    const lastLine = tab.url.lastIndexOf("/");
    const path = tab.url.slice(lastLine);
    return path;
  };

  const renderTabList = (tabList) => {
    return tabList.map((tab) => {
      return (
        <Link className="tab-item" key={tab.id} to={resolvePath(tab)}>
          <div className="img-wrapper">
            {tab.name === "每日推荐" ? (
              <span className="cur-date">{curDate}</span>
            ) : null}
            <img src={tab.iconUrl} alt="" />
          </div>
          <p className="name">{tab.name}</p>
        </Link>
      );
    });
  };

  useEffect(() => {
    queryTabList();
    // 获取每天的日期
    setCurDate(getCurDate());
  }, []);

  return (
    <div className="tab-list">{!!tabList.length && renderTabList(tabList)}</div>
  );
}

export default React.memo(Tab);
