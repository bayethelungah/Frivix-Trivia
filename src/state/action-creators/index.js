export const setDarkMode = (bool) => {
  return (dispatch) => {
    dispatch({
      type: "false",
      payload: bool,
    });
  };
};
export const setCategorieDrop = (bool) => {
  return (dispatch) => {
    dispatch({
      type: "false",
      payload: bool,
    });
  };
};
export const setAnsweredCorrectly = (bool) => {
  return (dispatch) => {
    dispatch({
      type: "answer",
      payload: bool,
    });
  };
};
export const setQuestion = (number) => {
  return (dispatch) => {
    dispatch({
      type: "Increment",
      payload: number,
    });
  };
};
