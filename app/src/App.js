import React from 'react';

import { fetchFacts } from './store/actions'

import { connect } from 'react-redux';

import FactsList from "./components/FactsList";
import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1>CAT FACTS</h1>
      <button onClick={props.fetchFacts}>get random fact about cats</button>
      <FactsList className="list"/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      isLoading: state.isLoading,
      facts: state.facts,
      error: state.error
  };
};

export default connect(mapStateToProps, {fetchFacts})(App);
