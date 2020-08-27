import React, { useState, useEffect } from "react";
import request from "../../services";

export default function SongRank() {
  useEffect(() => {
    request.queryTopList().then((res) => {
      console.log(res);
    });
  }, []);

  return <div>排行榜</div>;
}
