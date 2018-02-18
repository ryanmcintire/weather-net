import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {getWeather} from '../actions/weather-actions';



class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.onSearchInputChange = this.onSearchInputChange.bind(this);
  }

  onSearchInputChange(e) {
    this.setState({searchTerm: e.target.value});
  }

  handleSearchSubmit(e) {
    e.preventDefault();
    this.props.getWeather(this.state.searchTerm);
    this.setState({searchTerm: ''});
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.handleSearchSubmit}>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search for location."
            value={this.state.searchTerm}
            onChange={this.onSearchInputChange}
          />
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <button type="submit" className="btn btn-primary mb-2">
            Fetch
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({getWeather}, dispatch);

export default connect(null, mapDispatchToProps)(Search);
