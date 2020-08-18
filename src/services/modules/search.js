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

// 搜索匹配，必选参数：keywords
export const searchMultimatch = (params) => {
  return get("/search/multimatch", params);
};
