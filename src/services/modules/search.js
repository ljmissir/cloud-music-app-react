import { get } from "../request";

// 获取热搜列表
export const queryHotSearchList = (params) => {
  return get("/search/hot", params);
};

// 获取热搜列表详情
export const queryHotSearchDetail = (params) => {
  return get("/search/hot/detail", params);
};

// 获取搜索建议，可选参数 : type : 如果传 'mobile' 则返回移动端数据
export const querySearchSuggest = (params) => {
  return get("/search/suggest", params);
};

// 根据关键字查询搜索结果
/*Type: 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000:
歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
*/
export const querySearchResult = (params) => {
  return get("/search", params);
};
