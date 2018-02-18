import React from "react";

export default class Title extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Weatherish</h1>
        <p className="lead">
          Search for a geographic location and see weather for the past week
          displayed.
        </p>
      </div>
    );
  }
}
