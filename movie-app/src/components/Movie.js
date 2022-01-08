import { Link } from "react-router-dom";

const Movie = ({ id, coverImg, title, genres, summary }) => {
  return (
    <div>
      <img src={coverImg} alt={title}></img>
      <h1>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h1>
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
    </div>
  );
};

export default Movie;
