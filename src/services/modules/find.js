import { get } from "../request";

// 获取默认热搜关键字
export const queryDefaultHotSearchKey = (params) => {
  return get("/search/default", params);
};

// 获取banner
export const queryBannerList = (params) => {
  return get("/banner", params);
};

// 每日推荐歌单
export const queryRecommend = (params) => {
  return get("/recommend/resource", params);
};

// 每日推荐歌曲
export const queryRecommendSong = (params) => {
  return get("/recommend/songs", params);
};

// 排行榜
export const queryTopList = (params) => {
  return get("/toplist", params);
};

// 首页圆形图标数据
export const queryHomePageBall = (params) => {
  return get("/homepage/dragon/ball", params);
};

// 首页新碟数据
export const queryHomePageAlbum = (params) => {
  return get("/album/newest", params);
};
