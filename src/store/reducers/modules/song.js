const playMode = {
  // 顺序播放
  sequence: 0,
  // 随机播放
  random: 1,
  // 循环播放
  loop: 2
};

const initialState = {
  curSong: {},
  playList: [],
  curIndex: null,
  showTabBar: false,
  // 播放模式
  mode: playMode.sequence
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CUR_SONG":
      return { ...state, ...{ curSong: action.curSong } };
    case "SET_PLAY_LIST":
      return {
        ...state,
        ...{
          playList: action.playList,
          curIndex: resolveCurIndex(action.playList, action.curSongId)
        }
      };
    case "SET_CUR_INDEX":
      return { ...state, ...{ curIndex: action.curIndex } };
    case "SET_MODE":
      return { ...state, ...{ mode: action.mode } };
    case "SET_TAB_BAR":
      return { ...state, ...{ showTabBar: action.showTabBar } };
    default:
      return { ...state };
  }
};

function resolveCurIndex(playList, curSongId) {
  return playList.findIndex((item) => item.id === curSongId);
}

export default songReducer;
