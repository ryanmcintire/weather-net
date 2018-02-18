import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {getWeather} from '../actions/weather-actions';
import {getLocationSearch} from '../actions/geodata-actions';

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
    console.log(prevProps);
    console.log(this.props.geoData);
    console.log('Geodata^^^^');
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

  render() {
    return (
      <form className="form-inline" onSubmit={this.handleSearchSubmit}>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search for location."
            value={this.state.query}
            onChange={this.onSearchInputChange}
          />
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <button type="submit" className="btn btn-primary mb-2">
            Fetch
          </button>
        </div>
        {/* <div className="container">
          {this.props.geoData}
        </div> */}
      </form>
    );
  }
}

const mapStateToProps = ({geoData}) => ({geoData});

const mapDispatchToProps = dispatch => bindActionCreators({getWeather, getLocationSearch}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
