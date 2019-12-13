import {
  FETCH_LYRICS_START,
  FETCH_LYRICS_SUCCESS,
  FETCH_LYRICS_FAILURE
} from "../actions/";

const initialState = {
  lyrics: null,
  isFetching: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LYRICS_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_LYRICS_SUCCESS:
      return {
        ...state,
        lyrics: action.payload,
        isFetching: false,
        error: ""
      };
    case FETCH_LYRICS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
