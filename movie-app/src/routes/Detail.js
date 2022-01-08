import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

//https://yts.mx/api/v2/movie_details.json?movie_id=

const Detail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const res = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await res.json();

    setMovie(json.data.movie);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovie();
  });

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <button>
            <Link to="/">back to main</Link>
          </button>
          <h1>{movie.title}</h1>
          <h5>{movie.title_long}</h5>
          <img src={movie.large_cover_image}></img>
          <p>{movie.description_full}</p>
        </div>
      )}
    </div>
  );
};

export default Detail;
