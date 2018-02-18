import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

export default class Search extends React.Component {
  render() {
    return (
      <form className="form-inline">
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter search data."
          />
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <button type="submit" class="btn btn-primary mb-2">
            Search
          </button>
        </div>
      </form>
    );
  }
}
