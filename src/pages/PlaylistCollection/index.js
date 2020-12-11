import React, { useEffect } from "react";
import request from "../../services";

export default function PlaylistCollection() {
  const queryRecommendList = async () => {
    const result = await request.queryRecommend();
    console.log(result, 123);
  };

  useEffect(() => {
    queryRecommendList();
  }, []);

  return <div>歌单</div>;
}
