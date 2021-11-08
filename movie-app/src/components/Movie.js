import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "./Loading";

class Movie extends React.Component {
  render() {
    const {
      Title,
      Genre,
      Released,
      Rated,
      imdbRating,
      Director,
      Writer,
      Actors,
      Plot,
      imdbID,
      Poster,
    } = this.props.movie;
    return (
      <div className="movieDetails">
        <div className="imgBox">
          <img src={Poster} alt={Title} />
        </div>
        <div className="detailsBox">
          <h3 className="infoTitle">{Title}</h3>
          <p>
            Genre: <b>{Genre}</b>
          </p>
          <p>
            Released: <b>{Released}</b>
          </p>
          <p>
            Rated: <b>{Rated}</b>
          </p>
          <p>
            IMBD Rating: <b>{imdbRating}</b>
          </p>
          <p>
            Director: <b>{Director}</b>
          </p>
          <p>
            Writer: <b>{Writer}</b>
          </p>
          <p>
            Actors: <b>{Actors}</b>
          </p>
        </div>
        <div className="aboutBox">
          <p>
            About: <b>{Plot}</b>
          </p>
          <a href={`https://www.imdb.com/title/${imdbID}`} target="blank">
            <h2 className="viewButton">View on IMBD</h2>
          </a>
          <Link className="viewButton" to="/">
            Go Back To Search
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.movie,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Movie);
