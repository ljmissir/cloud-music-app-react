import React, { useEffect, useState } from "react";
import request from "../../services/index";
import "./index.scss";
import { Carousel, WingBlank } from "antd-mobile";

export default function Find() {
  const [bannerList, setBannerList] = useState([]);

  // 渲染轮播图
  const renderBanner = (bannerList) => {
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

  useEffect(() => {
    request.queryBannerList().then((res) => {
      console.log(res);
      const { banners } = res;
      setBannerList(banners);
    });
  }, []);

  return (
    <div className="banner-wrapper">
      {!!bannerList.length && (
        <WingBlank>
          <Carousel autoplay infinite>
            {renderBanner(bannerList)}
          </Carousel>
        </WingBlank>
      )}
    </div>
  );
}
