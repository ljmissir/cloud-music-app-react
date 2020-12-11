import React, { useEffect } from "react";
import request from "../../services";
import { connect } from "react-redux";
import Storage from "../../utils/storage";

function User(props) {
  const user = Storage.get("user");
  const { id } = user.account || "";

  const queryLikeList = async () => {
    const result = await request.queryMyLikeList({ uid: id });
    const ids = result.ids.join(",");
    const likeList = await request.querySongDetail({ ids });
    console.log(likeList, 89);
  };

  const queryUserDetail = async () => {
    const result = await request.queryUserDetail({ uid: id });
    console.log(result);
  };

  useEffect(() => {
    queryLikeList();
    queryUserDetail();
  });
  return <div style={{ height: "100%" }}>我的</div>;
}

export default connect(({ user }) => ({ user }))(User);
