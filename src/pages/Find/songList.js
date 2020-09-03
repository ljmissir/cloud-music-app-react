import React, { useEffect, useState } from "react";
import { Tabs } from "antd-mobile";
import request from "../../services";

export default function SongList() {
  const [songList, setSongList] = useState([]);

  const queryRecommendList = async () => {
    const result = await request.queryRecommend();
    setSongList(result.recommend);
  };

  const renderSongList = (songList) => {
    console.log(songList, 123);
    return songList.map((song) => {
      return (
        <div className="song-item" key={song.picUrl}>
          <div className="img-wrapper">
            <img src={song.picUrl} />
          </div>
          <p className="name">{song.name}</p>
        </div>
      );
    });
  };

  useEffect(() => {
    queryRecommendList();
  }, []);

  return (
    <div className="song-list-wrapper">
      <div className="song-list-title">
        <span>发现好歌单</span>
        <span>查看更多</span>
      </div>
      <Tabs
        tabs={songList}
        renderTabBar={(props) => <Tabs.DefaultTabBar {...props} page={3} />}
      >
        {!!songList.length && renderSongList(songList)}
      </Tabs>
    </div>
  );
}
