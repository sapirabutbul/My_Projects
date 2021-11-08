import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { handleMovieInfo } from "../redux/actions";

const MovieInfo = (props) => {
  const { eachMovie } = props;
  const { Title, Year, imdbID, Poster } = eachMovie;

  return (
    <div className="movieInfo">
      <img className="manuImg" src={Poster} />
      <h3 className="movieTitle">
        {Title} - {Year}
      </h3>

      <Link className="LinkButton" to="/movie">
        <button
          className="detailsButton"
          id={imdbID}
          onClick={props.handleMovieInfo}
        >
          More Details
        </button>
      </Link>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleMovieInfo: (e) => dispatch(handleMovieInfo(e.target.id)),
  };
};
export default connect(null, mapDispatchToProps)(MovieInfo);
