const Movie = ({ coverImg, title, genres, summary }) => {
  return (
    <div>
      <img src={medium_cover_image}></img>
      <h1>{title}</h1>
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
      <p>{summary}</p>
    </div>
  );
};

export default Movie;
