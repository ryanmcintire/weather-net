import React from "react";
import { connect } from "react-redux";
import moment from 'moment';

import WeatherDisplayTable from './weather-display-table';

class WeatherDisplayContainer extends React.Component {

  render() {
    return <WeatherDisplayTable weather={this.props.weatherData.weather} />
  }

}

const mapStateToProps = ({weatherData}) => ({weatherData});

export default connect(mapStateToProps)(WeatherDisplayContainer);
