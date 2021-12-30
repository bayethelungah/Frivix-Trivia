import { combineReducers } from "redux";
import darkModeReducer from "./darkModeReducer";
import categorieDropReducer from "./categorieDropReducer";
import answeredCorrectlyReducer from "./answeredCorrectlyReducer";
import questionReducer from "./questionReducer";

const reducers = combineReducers({
  darkMode: darkModeReducer,
  categorieDropDown: categorieDropReducer,
  answeredCorrectly: answeredCorrectlyReducer,
  whichQuestion: questionReducer,
});

export default reducers;
