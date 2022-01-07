//https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year
import { useState, useEffect } from "react";

function App() {
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
          {movies &&
            movies.map((movie) => (
              <div key={movie.id}>
                <img src={movie.medium_cover_image}></img>
                <h1>{movie.title}</h1>
                <ul>
                  {movie.genres &&
                    movie.genres.map((g) => <li key={g}>{g}</li>)}
                </ul>
                <p>{movie.summary}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default App;
