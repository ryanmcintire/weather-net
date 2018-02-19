import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {getWeather} from '../actions/weather-actions';
import {getLocationSearch, noSearchResults} from '../actions/geodata-actions';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      searchPending: false
    };

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.onSearchInputChange = this.onSearchInputChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.geoData.dispatchGetWeather && !this.props.weatherData.getWeatherPending) {
      const {search} = this.props.geoData;
      if (search.results.length === 0) {
        this.dispatchNoSearchResults();
      } else {
        this.dispatchGetWeather(search);
      }
    }
  }

  dispatchNoSearchResults() {
    this.props.noSearchResults(this.props.geoData.submittedQuery);
  }

  dispatchGetWeather(search) {
    const {lat, lng} = search.results[0].geometry.location;
    this.props.getWeather(lat, lng);
  }

  onSearchInputChange(e) {
    this.setState({query: e.target.value});
  }

  handleSearchSubmit(e) {
    e.preventDefault();
    this.props.getLocationSearch(this.state.query);
    //this.props.getWeather(this.state.query);
    this.setState({
      query: '',
      searchPending: true
    });
  }

  isInputDisabled() {
    const {weatherData, geoData} = this.props;
    return (weatherData.getWeatherPending || geoData.geoSearchPending) ?
      "disabled" :
      ""
  }

  isButtonDisabled() {
    return (this.isInputDisabled() || this.state.query < 1) ?
      true :
      false
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.handleSearchSubmit}>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search for location (e.g., 'What Cheer, Iowa'."
            value={this.state.query}
            onChange={this.onSearchInputChange}
            disabled={this.isInputDisabled()}
            required
          />
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <button type="submit" className="btn btn-primary mb-2" disabled={this.isButtonDisabled()}>
            Fetch
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({weatherData, geoData}) => ({weatherData, geoData});

const mapDispatchToProps = dispatch => bindActionCreators({getWeather, getLocationSearch, noSearchResults}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
