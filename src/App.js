import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction, resetAction } from './action/action';
// import { Field, reduxForm } from 'redux-form';
import { Sparklines, SparklinesBars, SparklinesLine } from 'react-sparklines';
import axios from 'axios';
let data = [];

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      price:null,
      // data:[]
    }
  }

  componentDidMount() {
    axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD').then((response) => {
      this.setState({price:response.data['USD']})
    })
    setInterval(() => this.props.simpleAction(), 3000);
  }

  componentWillUpdate(props){
    if(props.result){
      data = [];
      Object.keys(props.result).map((key) => {
        data.push(props.result[key]["high"]);
      });
    }
   }

  simpleAction = (event) => {
    this.props.simpleAction().then(response => {
      console.log("response", response);
    });
  }

  resetAction = (event) => {
    console.log('this.props', this.props);
    this.props.resetAction();
  }

  render() {
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
            {this.state.price}
          </ul>
          <div>
          <Sparklines data={data}>
            <SparklinesBars style={{ stroke: "white", fill: "#41c3f9", fillOpacity: ".25" }} />
            <SparklinesLine style={{ stroke: "#41c3f9", fill: "none" }} />
          </Sparklines>
          </div>
        </div>


      </div>
    );
  }
}

const mapStateToProps = state => {
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
