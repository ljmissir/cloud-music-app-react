const userReducer = (initialState = {}, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...initialState, ...action.user };
    default:
      return initialState;
  }
};

export default userReducer;
