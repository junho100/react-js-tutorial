import { useState, useEffect } from "react";
import Movie from "../components/Movie.js";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMovie = async () => {
    const res = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    );
    const json = await res.json();
    setMovies(json.data.movies);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              genres={movie.genres}
              summary={movie.summary}
            ></Movie>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
