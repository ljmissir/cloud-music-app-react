import React from "react";

export default function Cover(props) {
  const {
    coverImgUrl,
    name,
    description,
    backgroundUrl,
    avatarUrl,
    nickname,
  } = props;

  const getCoverBg = (backgroundUrl) => {
    return {
      background: `url(${backgroundUrl})`,
    };
  };

  return (
    <div className="cover-wrapper">
      <div className="cover" style={getCoverBg(backgroundUrl)}></div>
      <div className="cover-content">
        <div className="img-wrapper">
          <img className="img" src={coverImgUrl} alt="" />
          <div className="description">
            <div className="name">{name}</div>
            <div className="nick-name">
              <img src={avatarUrl} alt="" />
              <span>{nickname}</span>
            </div>
            <div className="desc">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
