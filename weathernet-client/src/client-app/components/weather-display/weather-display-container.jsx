import React from "react";
import { connect } from "react-redux";
import moment from "moment";

import WeatherDisplayTable from "./weather-display-table";

class WeatherDisplayContainer extends React.Component {
  render() {
    if (!this.props.geoData.anySearchSubmitted) return <div />;

    if (this.props.geoData.geoSearchPending) {
      return this.renderGeoSearchPending();
    }
    if (this.props.geoData.searchError) {
      return this.renderSearchError();
    }
    if (this.props.weatherData.getWeatherPending) {
      return this.renderGetWeatherPending();
    }
    if (this.props.weatherData.getWeatherError) {
      return this.renderGetWeatherError();
    }

    return <WeatherDisplayTable weather={this.props.weatherData.weather} location={this.props.geoData.submittedQuery} />;
  }

  renderGeoSearchPending() {
    return (
      <div>
      <div className="row">
        <div className="container weather-title">
          <h3 className="text-center">Searching  geolocation data for '{this.props.geoData.submittedQuery}'.</h3>
        </div>
      </div>
    </div>
    )
  }

  renderSearchError() {
    return (
      <div>
      <div className="row">
        <div className="container weather-title">
          <h3 className="text-center">Error when searching for location '{this.props.geoData.submittedQuery}'.</h3>
        </div>
      </div>
    </div>
    )
  }

  renderGetWeatherPending() {
    return (
      <div>
      <div className="row">
        <div className="container weather-title">
          <h3 className="text-center">Fetching weather for '{this.props.geoData.submittedQuery}'.</h3>
        </div>
      </div>
    </div>
    )
  }

  renderGetWeatherError() {
    return (
      <div>
      <div className="row">
        <div className="container weather-title">
          <h3 className="text-center">Error fetching weather for '{this.props.geoData.submittedQuery}'.</h3>
        </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = ({ weatherData, geoData }) => ({
  weatherData,
  geoData
});

export default connect(mapStateToProps)(WeatherDisplayContainer);
