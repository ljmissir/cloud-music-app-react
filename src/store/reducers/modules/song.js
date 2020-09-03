const initialState = {
  songUrl: "",
  curSong: {},
  playList: [],
  currentIndex: 0,
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURSONG_URL":
      return { ...state, ...{ songUrl: action.songUrl } };
    case "SET_CUR_SONG":
      return { ...state, ...{ curSong: action.curSong } };
    case "SET_PLAY_LIST":
      return { ...state, ...{ playList: action.playList } };
    case "SET_CUR_INDEX":
      return { ...state, ...{ currentIndex: action.currentIndex } };

    default:
      return { ...state };
  }
};

export default songReducer;
