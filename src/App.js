import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import Input from './components/input/input';
import Draft from './components/draft/draft';
import Save from './components/save/save';
class App extends Component {

  render(){
    return (
      <div className="app container">

        <div className="app-header">
            <h1>React app for <b>Aventica</b></h1>
            <div className="app-header-number">
              <span>{this.props.reducer.indicatorCounter.length}</span>
            </div>
        </div>

        <div className="app-main">
          <div className="app-left">
            <Input />
            <Draft />
          </div>

          <Save />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reducer: state.reducer,
  }
}

export default connect(mapStateToProps)(App);
