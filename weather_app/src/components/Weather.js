import React from "react";
import { connect } from "react-redux";
import { handleFetch } from "../redux/actions";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: "Just write a city name..",
    };
  }
  componentDidMount() {
    console.log("this propssss", this.props);
  }
  fetchWeather = (e) => {
    e.preventDefault();
    if (!e.target[0].value) {
      this.setState({ placeholder: "You need to write something!" });
      setTimeout(() => {
        this.setState({ placeholder: "Just write a city name.." });
      }, 1500);
    } else {
      this.props.handleFetch(e.target[0].value);
      e.target[0].value = "";
    }
  };

  render() {
    const { weatherInfo } = this.props;
    const { weather, main, sys, name } = weatherInfo;
    return (
      <div className="weatherCont shadow-4">
        <form onSubmit={this.fetchWeather}>
          <input
            type="text"
            placeholder={this.state.placeholder}
            className="f6 f5-l input-reset bn fl black-80 bg-white pa2 lh-solid w-100 w-75-m w-80-l br2-ns"
          />
          <button className="f6 link br3 ph3 pv2 mb2 dib white bg-navy">
            Get Weather
          </button>
        </form>
        <div className="infoBox">
          <p className="info">Location: </p>
          <p className="result">{name ? `${name}, ${sys.country}` : null}</p>
          <p className="info">Temperature:</p>
          <p className="result"> {main ? `${main.temp}°C` : null}</p>
          <p className="info">Humidity:</p>
          <p className="result"> {main ? `${main.humidity}%` : null}</p>
          <p className="info">Condition: </p>
          <p className="result">{weather ? weather[0].description : null}</p>
          <p className="notFound">{weatherInfo ? weatherInfo.message : null}</p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    weatherInfo: state.weatherInfo,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleFetch: (e) => dispatch(handleFetch(e)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Weather);
