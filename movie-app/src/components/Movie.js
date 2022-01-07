import { Link } from "react-router-dom";

const Movie = ({ coverImg, title, genres, summary }) => {
  return (
    <div>
      <img src={coverImg}></img>
      <h1>
        <Link to="/movie">{title}</Link>
      </h1>
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
      <p>{summary}</p>
    </div>
  );
};

export default Movie;
