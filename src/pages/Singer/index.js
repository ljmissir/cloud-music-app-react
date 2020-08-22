import React, { useState, useEffect } from "react";
import request from "../../services";
import { List, PullToRefresh, Toast } from "antd-mobile";
import "./index.scss";

export default function Singer(props) {
  const { history } = props;
  const [singerList, setSingerList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const querySongs = (singer) => {
    const { id } = singer;
    history.push(`/songs?id=${id}`);
  };

  const querySingerList = async () => {
    if (!hasMore) {
      Toast.info("没有更多了");
      return;
    }
    setOffset(offset + 25);
    const result = await request.querySingerList({
      type: -1,
      limit: 20,
      offset,
    });
    if (!!result.artists.length) {
      setSingerList([...singerList, ...result.artists]);
    }
    setHasMore(result.more);
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

  useEffect(() => {
    querySingerList();
  }, []);

  return (
    <div className="singer-wrapper">
      <PullToRefresh direction="up" onRefresh={querySingerList}>
        <List className="singer-list">
          {!!singerList.length && renderSingerList(singerList)}
        </List>
      </PullToRefresh>
    </div>
  );
}
