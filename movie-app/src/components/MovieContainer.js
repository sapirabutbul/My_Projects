import React from "react";
import { connect } from "react-redux";
import MovieInfo from "./MovieInfo";
import Loading from "./Loading";

class MovieContainer extends React.Component {
  render() {
    const { movies, loading } = this.props;
    if (!movies.length && loading) {
      return <Loading />;
    } else {
      return (
        <div className="movieContainer">
          {movies.map((element) => {
            return <MovieInfo eachMovie={element} />;
          })}
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    loading: state.loading,
  };
};

export default connect(mapStateToProps, null)(MovieContainer);
