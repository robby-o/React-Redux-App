export const FETCH_LYRICS_START = "FETCH_LYRICS_START";
export const FETCH_LYRICS_SUCCESS = "FETCH_LYRICS_SUCCESS";
export const FETCH_LYRICS_FAILURE = "FETCH_LYRICS_FAILURE";

export const getLyrics = () => dispatch => {
  dispatch({ type: FETCH_LYRICS_START });
  fetch("https://api.lyrics.ovh/v1/Queen/Innuendo")
    .then(res => res.json())
    .then(data => {
      dispatch({ type: FETCH_LYRICS_SUCCESS, payload: data });
    })
    .catch(err => {
      dispatch({ type: FETCH_LYRICS_FAILURE, payload: err });
    });
};
