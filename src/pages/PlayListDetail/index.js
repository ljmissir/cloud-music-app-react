import React, { useState, useEffect } from "react";
import request from "../../services";
import Cover from "./cover";
import PlayList from "./playList";
import "./index.scss";

export default function PlayListDetail(props) {
  const { id } = props.match.params;
  const [coverProps, setCoverProps] = useState({});
  const [playList, setPlayList] = useState([]);

  // 查询歌单详情
  const queryPlayListDetail = async () => {
    const result = await request.queryPlayListDetail({ id });
    const { coverImgUrl, name, description } = result.playlist;
    const { backgroundUrl, nickname, avatarUrl } = result.playlist.creator;
    const ids = result.playlist.trackIds.map((item) => item.id).join(",");
    await querySongDetail(ids);
    setCoverProps({
      coverImgUrl,
      name,
      backgroundUrl,
      nickname,
      avatarUrl,
      description: description ? description.slice(0, 30) : "暂无简介",
    });
  };

  // 获取歌单所有歌曲
  const querySongDetail = async (ids) => {
    const result = await request.querySongDetail({ ids });
    console.log(result, 234);
    setPlayList(result.songs);
  };

  // 获取歌单评论
  const queryComment = async () => {
    const result = await request.queryPlayListComment({ id });
    console.log(result, 987);
  };

  useEffect(() => {
    queryPlayListDetail();
    queryComment();
  }, []);

  return (
    <div className="play-list-detail">
      <Cover {...coverProps} />
      <PlayList playList={playList} />
    </div>
  );
}
