const initialState = {
  curSong: {},
  playList: [],
  curIndex: null
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
    default:
      return { ...state };
  }
};

function resolveCurIndex(playList, curSongId) {
  return playList.findIndex((item) => item.id === curSongId);
}

export default songReducer;
