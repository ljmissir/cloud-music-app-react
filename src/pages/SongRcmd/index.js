import React, { useState, useEffect } from "react";
import request from "../../services";
import { List } from "antd-mobile";
import { connect } from "react-redux";
import "./index.scss";

function SongRcmd(props) {
  const [songList, setSongList] = useState([]);
  const { dispatch } = props;

  // 查询歌曲url
  const querySong = async (song) => {
    if (!song) return;
    const { id } = song;
    const result = await request.querySongUrl({ id });
    dispatch({ type: "SET_CURSONG_URL", songUrl: result.data[0].url });
    dispatch({ type: "SET_PLAY_LIST", playList: songList });
  };

  const renderSongList = (songList) => {
    return songList.map((song) => {
      return (
        <List.Item
          className="singer-item"
          arrow="horizontal"
          key={song.id}
          onClick={() => {
            querySong(song);
          }}
        >
          <div className="info">
            <img className="avatar" src={song.al.picUrl} alt="" />
            <div>
              <p className="song-name">{song.name}</p>
              <p className="singer-info">
                <span className="singer-name">{song.ar[0].name}</span>
                <span> - </span>
                <span className="al-name">{song.al.name}</span>
              </p>
            </div>
          </div>
        </List.Item>
      );
    });
  };

  useEffect(() => {
    request.queryRecommendSong().then((res) => {
      setSongList(res.data.dailySongs);
    });
  }, []);

  return (
    <div className="recommend-wrapper">
      {!!songList.length && renderSongList(songList)}
    </div>
  );
}

export default connect(({ song }) => ({ song }))(SongRcmd);
