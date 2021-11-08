export const FETCH_MEMES = "FETCH_MEMES";
export const TOP_TEXT = "TOP_TEXT";
export const BOTTOM_TEXT = "BOTTOM_TEXT";

export const fetchMemes = () => (dispatch) => {
  fetch(`https://api.imgflip.com/get_memes`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.data.memes);
      dispatch({ type: FETCH_MEMES, payload: data.data.memes });
    })
    .catch((e) => {
      console.log("error", e);
    });
};
export const createTopText = (value) => {
  return {
    type: TOP_TEXT,
    payload: value,
  };
};
export const createBottomText = (value) => {
  return {
    type: BOTTOM_TEXT,
    payload: value,
  };
};
