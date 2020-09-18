import React, { useEffect } from "react";
import request from "../../services";
import Storage from "../../utils/storage";

export default function Djradio() {
  const user = Storage.get("user");
  const { id } = user.account || "";
  useEffect(() => {
    request.queryUserDj({ uid: id });
  });
  return <div>电台</div>;
}
