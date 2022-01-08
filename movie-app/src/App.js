//https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year
import Home from "./routes/Home.js";
import Detail from "./routes/Detail.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail></Detail>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
