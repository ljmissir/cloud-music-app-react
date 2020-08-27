import { get } from "../request";

export const queryUserPlayList = (params) => {
  return get("/user/playlist", params);
};
