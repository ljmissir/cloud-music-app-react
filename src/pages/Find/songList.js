import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        <Link
          className="song-item"
          key={song.id}
          to={`/playListDetail/${song.id}`}
        >
          <div className="img-wrapper">
            <img src={song.picUrl} />
          </div>
          <p className="name">{song.name}</p>
        </Link>
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
        <Link className="more" to="/more">
          查看更多
        </Link>
      </div>
      <div className="song-content">
        {!!songList.length && renderSongList(songList)}
      </div>
    </div>
  );
}
