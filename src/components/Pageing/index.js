import React from "react";
import loading from "./loading.gif";
import "./index.scss";

export default function Pageing() {
  return (
    <div className="pageing">
      <div className="pageing-wrapper">
        <img src={loading} alt="loading" />
      </div>
    </div>
  );
}
