import React from "react";

import Title from './components/title';
import Search from './components/search';

export default class Root extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="container">
            <Title />
          </div>
        </div>
        <div className="row">
          <div className="container"><Search /></div>
        </div>
      </div>
    );
  }
}
