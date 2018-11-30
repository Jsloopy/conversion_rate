import React, { Component } from 'react';
import './Chart.css';

class Chart extends Component {
    render() {
        return(
         
            <div class="Chart">
                  {
                 this.state.comparisons.map(comparison => {
                   return <div class="bar" style={{height: this.comparisonRate(comparison) + "%"}}> 
                     {"$" +  this.comparisonValues(comparison)+ comparison}
                   </div>
                 })
                 }
           </div> 

        );
    }
}


export default Chart;


