import React from "react";
import loadable from "loadable-components";
import Pageing from "../components/Pageing";
import PageError from "../components/PageError";

const Loading = () => <Pageing />;

const ErrorDisplay = ({ error }) => <PageError errorMessage={error.message} />;

const meta = { LoadingComponent: Loading, ErrorComponent: ErrorDisplay };

export default [
  // 发现页
  {
    component: loadable(() => import("../pages/Find"), { ...meta }),
    path: "/find",
  },
  // 登录页
  {
    component: loadable(() => import("../pages/Login"), { ...meta }),
    path: "/login",
  },
  // 搜索页
  {
    component: loadable(() => import("../pages/Search"), { ...meta }),
    path: "/search",
  },
  // 搜索结果页
  {
    component: loadable(() => import("../pages/SearchResult"), {
      ...meta,
    }),
    path: "/searchResult",
  },
  // 歌手页
  {
    component: loadable(() => import("../pages/Singer"), { ...meta }),
    path: "/singer",
  },
  // 歌曲页面
  {
    component: loadable(() => import("../pages/Songs"), { ...meta }),
    path: "/songs",
  },
  // 每日推荐
  {
    component: loadable(() => import("../pages/SongRcmd"), {
      ...meta,
    }),
    path: "/songRcmd",
  },
  // 推荐歌单
  {
    component: loadable(() => import("../pages/PlaylistCollection"), {
      ...meta,
    }),
    path: "/playlistCollection",
  },
  // 排行榜
  {
    component: loadable(() => import("../pages/SongRank"), {
      ...meta,
    }),
    path: "/songrank",
  },
  // 电台
  {
    component: loadable(() => import("../pages/Djradio"), {
      ...meta,
    }),
    path: "/djradio",
  },
  // 私人FM
  {
    component: loadable(() => import("../pages/Privatefm"), {
      ...meta,
    }),
    path: "/privatefm",
  },
  // 我的
  {
    component: loadable(() => import("../pages/User"), {
      ...meta,
    }),
    path: "/user",
  },
];
