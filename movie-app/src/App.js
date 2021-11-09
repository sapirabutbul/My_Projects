import "./App.css";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Movie from "./components/Movie";

function App() {
  return (
    <div>
      <div className="App">
        <Switch>
          <Route path="/movie_app_code/" exact children={<Landing />} />
          <Route path="/movie_app_code/movie" exact children={<Movie />} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
