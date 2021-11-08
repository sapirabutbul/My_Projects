import { FETCH_MEMES, TOP_TEXT, BOTTOM_TEXT } from "./actions";
import { combineReducers } from "redux";

const initState = {
  allMemeImgs: [],
  topText: "Top Text",
  bottomText: "Bottom Text",
};

export const fetchReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case FETCH_MEMES:
      return { ...state, allMemeImgs: action.payload };
    default:
      return { ...state };
  }
};

export const memeReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case TOP_TEXT:
      return { ...state, topText: action.payload };
    case BOTTOM_TEXT:
      return { ...state, bottomText: action.payload };
    default:
      return { ...state };
  }
};
export const reducer = combineReducers({
  fetchReducer,
  memeReducer,
});
