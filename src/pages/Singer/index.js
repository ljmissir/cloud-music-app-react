import React, { useState, useEffect } from "react";
import request from "../../services";
import { List } from "antd-mobile";
import "./index.scss";

export default function Singer(props) {
  const { history } = props;
  const [singerList, setSingerList] = useState([]);

  const querySongs = (singer) => {
    const { id } = singer;
    history.push(`/songs?id=${id}`);
  };

  const renderSingerList = (singerList) => {
    return singerList.map((singer) => {
      return (
        <List.Item
          className="singer-item"
          key={singer.id}
          arrow="horizontal"
          onClick={() => {
            querySongs(singer);
          }}
          thumb={singer.picUrl}
        >
          <div className="singer-name">{singer.name}</div>
        </List.Item>
      );
    });
  };

  useEffect(async () => {
    const result = await request.querySingerList({ type: -1, limit: 50 });
    setSingerList(result.artists);
  }, []);

  return (
    <div className="singer-wrapper">
      <List className="singer-list">
        {!!singerList.length && renderSingerList(singerList)}
      </List>
    </div>
  );
}
