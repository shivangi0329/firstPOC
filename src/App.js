import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction, resetAction } from './action/action';
// import { Field, reduxForm } from 'redux-form';
import { Sparklines,SparklinesBars,SparklinesLine } from 'react-sparklines';

class App extends Component {

  componentDidMount() {
    setInterval(() => this.props.simpleAction(), 3000);
  }

  simpleAction = (event) => {
    this.props.simpleAction();
  }

  resetAction = (event) => {
    console.log('this.props', this.props);
    this.props.resetAction();
  }

  render() {
    // const { handleSubmit } = this.props
    console.log('this.props.result', this.props.result);
    return (
      <div>
        <h1>hello world</h1>
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
        <div>
          <label>BTC</label>
          <ul>
            {this.props.result && Object.keys(this.props.result).map((key) => {
              return <li value={key}>{this.props.result[key] + " " + key}</li>
            })}
          </ul>
        </div>


        {this.props.result && <Sparklines data={this.props.result} limit={20}>
          <SparklinesBars style={{ fill: "#41c3f9", fillOpacity: ".25" }} />
          <SparklinesLine style={{ stroke: "#41c3f9", fill: "none" }} />
        </Sparklines>}

        {/* <button onClick={this.simpleAction}>Test redux action</button>
        <button onClick={this.resetAction.bind(this)}>rest redux action</button> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('state....!!!!!!!!!!!!!!!!!!!', state);
  return {
    result: state.simpleReducer.result
  }
}

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
  resetAction: () => dispatch(resetAction())
})

// App = reduxForm({
//   form: 'report'
// })(App)

export default connect(mapStateToProps, mapDispatchToProps)(App);
