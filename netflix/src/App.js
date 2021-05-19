import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Row from "./Row";

import requests from "./api";
// const API_KEY =
//   "https://api.themoviedb.org/3/movie/550?api_key=7032b6c3cbc5d66125a189f29e12e308";

function App() {
  // const [movies, setMovies] = useState([]);
  // const [value, setValue] = useState(0);

  // const fetchMovie = async () => {
  //   const response = await fetch(API_KEY);
  //   const movies = await response.json();
  //   setMovies(movies);
  // };

  // useEffect(() => {
  //   fetchMovie();
  // }, []);

  // const { original_title, overview, popularity } = movies[value];

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        isLargeRow
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
