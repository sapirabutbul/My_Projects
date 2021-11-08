import React from "react";
import { connect } from "react-redux";
import { handleSearch, handleFetchMovies } from "../redux/actions";

class SearchForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleFetchMovies(e.target[0].value);
  };

  render() {
    const { handleSearch } = this.props;
    return (
      <div className="searchHeader">
        <h1>Search for a movie, T.V series..</h1>
        <form onSubmit={this.handleSubmit}>
          <input className="searchBar" type="text" onChange={handleSearch} />
          <button className="submitButton" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFetchMovies: (e) => dispatch(handleFetchMovies(e)),
    handleSearch: (e) => dispatch(handleSearch(e.target.value)),
  };
};

export default connect(null, mapDispatchToProps)(SearchForm);
