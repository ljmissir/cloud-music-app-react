import React, { Component } from "react";
import errorIcon from "./error.png";
import "./index.scss";

class PageError extends Component {
  constructor(props) {
    super();
    this.state = {
      error: props.errorMessage,
    };
  }

  render() {
    const { error } = this.state;
    return (
      <div className="page-error">
        <img src={errorIcon} alt="error" />
        <p className="error-text">
          您的设备版本过低，请将当前页面截图后尽快联系客服
          <a href="tel:0755-868785884">0755-868785884</a>，详情：
          <span>{error}</span>
        </p>
      </div>
    );
  }
}

export default PageError;
