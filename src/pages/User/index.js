import React, { useState, useEffect } from "react";
import request from "../../services";
import { connect } from "react-redux";

function User(props) {
  console.log(props);
  const { id } = props.user.account;
  useEffect(() => {
    request
      .queryUserPlayList({ uid: id })
      .then((res) => [console.log(res, 1234)]);
  });
  return <div style={{ height: "100%" }}>我的</div>;
}

export default connect(({ user }) => ({ user }))(User);
