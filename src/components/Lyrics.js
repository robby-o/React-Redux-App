import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getLyrics } from "../actions/lyricsActions";

const Lyrics = () => {
  const lyrics = useSelector(state => state.lyrics);
  const isFetching = useSelector(state => state.isFetching);

  const dispatch = useDispatch();
  const fetchLyrics = useCallback(() => dispatch(getLyrics()), [dispatch]);

  return (
    <>
      <h1>Show the lyrics</h1>
      {!lyrics && !isFetching && <p>Fetch some lyrics</p>}
      {isFetching && <p>Loading...</p>}
      {lyrics && <p>{lyrics.lyrics}</p>}
      <button onClick={fetchLyrics} className="button">
        Grab lyrics
      </button>
    </>
  );
};

export default Lyrics;
