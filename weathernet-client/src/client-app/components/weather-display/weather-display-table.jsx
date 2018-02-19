import React from "react";
import moment from "moment";

export default class WeatherDisplayTable extends React.Component {
  render() {
    return this.props.weather &&
      this.props.weather.length > 0
      ? this.renderWeatherDisplayTable()
      : this.renderNoData();
  }

  renderNoData() {
    return (
      <div>
        <div className="row">
          <div className="container">
            <h3 className="no-weather text-center">No weather data to show.</h3>
          </div>
        </div>
      </div>
    );
  }

  renderWeatherDisplayTable() {
    return (
      <div>
        <div className="row">
          <div className="container weather-title">
            <h1 className="text-center">Showing weather!</h1>
          </div>
        </div>
        <div className="row">
          <div className="container weather-table-container">
            <table className="table table-hover">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Summary</th>
                  <th scope="col">High</th>
                  <th scope="col">Low</th>
                </tr>
              </thead>
              <tbody>
                {this.props.weather.map(this.renderWeatherTableRow)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  renderWeatherTableRow(weatherRowData) {
    const {
      summary,
      temperatureHigh,
      temperatureLow,
      time
    } = weatherRowData.daily.data[0];
    let day = moment(Number(time) * 1000);
    return (
      <tr key={time}>
        <th scope="row">{day.format("MMMM Do YYYY")}</th>
        <td>{summary}</td>
        <td>{temperatureHigh}</td>
        <td>{temperatureLow}</td>
      </tr>
    );
  }
}
