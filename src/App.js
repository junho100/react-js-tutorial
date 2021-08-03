import React from "react";
import axios from "axios";
import Movies from "./Movies";

const PROXYAPI = "https://yts-proxy.now.sh/list_movies.json?sort_by=rating";

class App extends React.Component{
  state = {
    id : 1,
    isLoading : true,
    movies : []
  };

  getMovies = async () => {
    const {data : {data : {movies}}} = await axios.get(PROXYAPI);
    this.setState({movies, isLoading : false});
  };

  componentDidMount(){
    this.getMovies();
  };

  render(){
    const {isLoading, movies} = this.state;
    return (
      <div>
        {isLoading ? "Loading..." : movies.map(movie =>(
          <Movies key = {movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />
        ))}
      </div>
    );
  };
}

export default App;
