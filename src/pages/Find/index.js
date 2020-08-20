import React, { useEffect, useState } from "react";
import request from "../../services/index";
import "./index.scss";
import { Carousel, WingBlank, SearchBar } from "antd-mobile";
import { connect } from "react-redux";

function Find(props) {
  const [bannerList, setBannerList] = useState([]);
  const [tabList, setTabList] = useState([]);
  const [curDate, setCurDate] = useState("");
  const [hotSearch, setHotSearch] = useState("");

  // 获取当前日期
  const getCurDate = () => {
    let date = new Date().getDate();
    date = date < 10 ? "0" + date : date;
    return date;
  };

  // 去搜索页
  const toSearch = () => {
    props.history.push("/search");
  };

  // 渲染轮播图
  const renderBanner = (bannerList) => {
    console.log(111);
    return (
      !!bannerList.length &&
      bannerList.map((banner) => {
        return (
          <img
            src={banner.imageUrl}
            key={banner.imageUrl}
            onLoad={() => {
              window.dispatchEvent(new Event("resize"));
            }}
            style={{ width: "100%", verticalAlign: "top" }}
          />
        );
      })
    );
  };

  const renderTabList = (tabList) => {
    return tabList.map((tab) => {
      return (
        <div className="tab-item" key={tab.id}>
          <div className="img-wrapper">
            {tab.name === "每日推荐" ? (
              <span className="cur-date">{curDate}</span>
            ) : null}
            <img src={tab.iconUrl} alt="" />
          </div>
          <p className="name">{tab.name}</p>
        </div>
      );
    });
  };

  useEffect(() => {
    console.log(props);

    // 获取热搜关键字
    request.queryDefaultHotSearchKey().then((res) => {
      console.log(res);
      setHotSearch(res.data.showKeyword);
    });

    // 获取每天的日期
    setCurDate(getCurDate());

    // 获取轮播图数据
    request.queryBannerList().then((res) => {
      console.log(res);
      const { banners } = res;
      setBannerList(banners);
    });

    // 获取推荐栏入口图标和数据
    request.queryHomePageBall().then((res) => {
      console.log(res, 1221);
      setTabList(res.data.splice(0, 5));
    });
  }, []);

  return (
    <div className="find-wrapper">
      <SearchBar placeholder={hotSearch} onFocus={toSearch} />
      {!!bannerList.length && (
        <WingBlank>
          <Carousel autoplay infinite>
            {renderBanner(bannerList)}
          </Carousel>
        </WingBlank>
      )}
      <div className="tab-list">
        {!!tabList.length && renderTabList(tabList)}
      </div>
    </div>
  );
}

export default connect(({ user }) => ({ user }))(Find);
