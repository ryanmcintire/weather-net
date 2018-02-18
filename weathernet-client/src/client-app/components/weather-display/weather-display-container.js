import React from "react";
import { connect } from "react-redux";
import moment from 'moment';

class WeatherDisplayContainer extends React.Component {

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props);
  }

  render() {
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
                {
                  this.props.weather.length > 0 ? 
                    this.props.weather.map(this.renderWeatherTableRow) :
                    ""  // todo - fix 
                }
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
      time} = weatherRowData.daily.data[0];
    let day = moment(Number(time)*1000);
    return (
      <tr key={time}>
        <th scope="row">{day.format("MMMM Do YYYY")}</th>
        <td>{summary}</td>
        <td>{temperatureHigh}</td>
        <td>{temperatureLow}</td>
      </tr>
    )
  }
}

const mapStateToProps = ({weatherData}) => {
  const weather = weatherData.weather || [];    // todo - configure initial state
  console.log(weather);
  return {weather};
}

export default connect(mapStateToProps)(WeatherDisplayContainer);
