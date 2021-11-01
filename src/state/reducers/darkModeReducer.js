const reducer = (state = false, action) => {
  switch (action.type) {
    case "true":
      return true;
    default:
      return state;
  }
};

export default reducer;
