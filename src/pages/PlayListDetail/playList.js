import React from "react";
import { List } from "antd-mobile";
import { connect } from "react-redux";

function PlayList(props) {
  const { playList } = props;
  const { dispatch } = props;

  const renderSongsList = (playList) => {
    return playList.map((song) => {
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

  // 查询歌曲url
  const querySong = async (curSong) => {
    if (!curSong) return;
    const { id } = curSong;
    dispatch({ type: "SET_PLAY_LIST", playList, curSongId: id });
  };

  return (
    <div className="play-list">
      <List>{!!playList.length && renderSongsList(playList)}</List>
    </div>
  );
}

export default React.memo(connect()(PlayList));
