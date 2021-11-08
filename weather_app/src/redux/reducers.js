import { FETCH_WEATHER } from "./actions";

const initState = {
  weatherInfo: {},
};

export const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return { ...state, weatherInfo: action.payload };
    default:
      return { ...state };
  }
};
