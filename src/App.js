import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction,resetAction } from './action/action';

class App extends Component {

  simpleAction = (event) => {
    this.props.simpleAction();
  }

  resetAction = (event) => {
    console.log('this.props',this.props);
    this.props.resetAction();
  }

  render() {
    return (
      <div>
        <h1>hello world</h1>
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
        <button onClick={this.simpleAction}>Test redux action</button>
        <button onClick={this.resetAction.bind(this)}>rest redux action</button>
      </div>
    );
  }
}

const mapStateToProps = state => { 
  console.log('state....!!!!!!!!!!!!!!!!!!!',state);
  return {
      ...state
  }
}

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
  resetAction : () => dispatch(resetAction())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
