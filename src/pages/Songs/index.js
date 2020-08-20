import React, { useState, useEffect } from "react";
import request from "../../services";
import { List } from "antd-mobile";
import * as utils from "../../utils/utils";
import "./index.scss";

export default function Songs(props) {
  let { search } = props.location;
  const [songList, setSongList] = useState([]);
  const [songUrl, setSongUrl] = useState("");
  const { id } = utils.getUrlParams(search);

  const querySong = async (song) => {
    const { id } = song;
    const result = await request.querySongUrl({ id });
    console.log(result);
    setSongUrl(result.data[0].url);
  };

  const renderSongsList = (songList) => {
    return songList.map((song) => {
      return (
        <List.Item
          className="singer-item"
          key={song.id}
          onClick={() => {
            querySong(song);
          }}
        >
          <div className="info">
            <p className="song-name">{song.name}</p>
            <p className="singer-info">
              <span className="singer-name">{song.ar[0].name}</span>
              <span> - </span>
              <span className="al-name">{song.al.name}</span>
            </p>
          </div>
        </List.Item>
      );
    });
  };

  useEffect(async () => {
    const result = await request.querySongBySingerId({ id, limit: 50 });
    setSongList(result.songs);
  }, []);

  return (
    <div className="songs-wrapper">
      <audio style={{ display: "none" }} src={songUrl} autoPlay></audio>
      <List className="song-list">
        {!!songList.length && renderSongsList(songList)}
      </List>
    </div>
  );
}
