const initialState = {
  songUrl: "",
  curSong: {},
  playList: [],
  currentIndex: 0,
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PLAY_LIST":
      return [...state.playList, ...action.playList];
    case "SET_CURSONG_URL":
      return Object.assign(state, { songUrl: action.songUrl });
    default:
      return { ...state };
  }
};

export default songReducer;
