// 登录
import { get } from "../request";

export const login = (params) => {
  return get("/login", params);
};

// 查询歌手名单
export const querySingerList = (params) => {
  return get("/artist/list", params);
};

// 根据歌手id查询歌手歌曲
export const querySongBySingerId = (params) => {
  return get("/artist/songs", params);
};
// 根据歌曲id查询歌曲url
export const querySongUrl = (params) => {
  return get("/song/url", params);
};

// 获取用户歌单
export const queryUserSongList = (params) => {
  return get("/user/playlist", params);
};

// 获取电台节目
export const getDjProgram = (params) => {
  return get("/dj/program", params);
};
