import React, { Component } from 'react';
import './App.css';

import Chart from './components/Chart/Chart.js';
import Base from './components/Base/Base.js';
import Country from './components/Country/Country.js'

class App extends Component {

  state = {

    baseCurrency: "USD",
    rates: {},
    comparisons: [],

  };

  componentDidMount() {
    fetch("https://api.exchangeratesapi.io/latest")
      .then(response => response.json())
      .then(api => {

        console.log("got data", api.rates);
        this.setState({
          rates: api.rates,
        });
      });
  };





  countrySelect = (ev) => {
    const comparisons = this.state.comparisons.concat([ev.target.value])
    this.setState({ comparisons: comparisons });
    console.log(comparisons)
    // const country = (ev.target.value)
    // console.log(country)
  }




  onSubmit = (ev) => {

    this.setState({ baseCurrency: ev.target.value });
    console.log({ baseCurrency: ev.target.value });
    const baseCurrency = ev.target.value;
    console.log(baseCurrency);
    const url = "https://api.exchangeratesapi.io/latest?base=" + ev.target.value;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ rates: data.rates })
        console.log(data.rates)

      });


  };



  render() {
    console.log("State:", this.state)


    return (
      <body className="background">

        <div className="Container">



          <Base
            value={this.state.baseCurrency}
            BaseChange={this.onSubmit.bind(this)}
          />

          <nav className="main_nav"> Currency Exchange Rate</nav>

          <Country
            country={this.state.Comparison}
            Changing={this.countrySelect.bind(this)}
          />


          <Chart
            comparisons={this.state.comparisons}
            rates={this.state.rates}
          />

        </div>
      </body>
    );
  }
}
export default App;
