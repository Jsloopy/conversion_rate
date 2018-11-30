import React, { Component } from 'react';
import './Chart.css';

class Chart extends Component {
    comparisonRate(comparison) {
        let height = 1/(this.props.rates[comparison])*100
        console.log(height)
        return height
     
       }
     
       comparisonValues(comparison){
       let rate = (this.props.rates[comparison])
       return rate
       }

    
    render() {
        return(
            <div className="Chart">
            {
           this.props.comparisons.map(comparison => {
             return <div className="bar" style={{height: this.comparisonRate(comparison) + "%"}}> 
               {"$" +  this.comparisonValues(comparison)+ comparison}
             </div>
           })
           }
     </div> 

        );
    }
}


export default Chart;


