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

// 获取歌单详情
export const queryPlayListDetail = (params) => {
  return get("/playlist/detail", params);
};

export const queryHomeBlockData = (params) => {
  return get("/homepage/block/page", params);
};

// 获取歌单歌曲
export const querySongDetail = (params) => {
  return get("/song/detail", params);
};

// 获取歌单评论
export const queryPlayListComment = (params) => {
  return get("/comment/playlist", params);
};
