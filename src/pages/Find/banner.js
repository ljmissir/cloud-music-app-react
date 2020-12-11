import React, { useEffect, useState } from "react";
import { Carousel, WingBlank } from "antd-mobile";
import request from "../../services";

function Banner() {
  const [bannerList, setBannerList] = useState([]);

  const queryBannerList = async () => {
    // 获取轮播图数据
    const result = await request.queryBannerList();
    setBannerList(result.banners);
  };

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
            alt={banner.imageUrl || ""}
          />
        );
      })
    );
  };

  useEffect(() => {
    queryBannerList();
  }, []);

  return (
    <div className="banner">
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

export default React.memo(Banner);
