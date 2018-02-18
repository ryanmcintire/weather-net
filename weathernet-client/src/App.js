import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Root from './client-app/root';
import reducers from './client-app/reducers/combined-reducers';

const createStoreMiddlewareApplied = applyMiddleware(ReduxPromise)(createStore);

class App extends React.Component {
  render() {
    return (
      <Provider store={createStoreMiddlewareApplied(reducers)}>
        <Root />
      </Provider>
    );
  }
}

export default App;
