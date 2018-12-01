import React, { Component } from 'react';


class Country extends Component {



    render() {
        return (
            <label> Select a Country:
            <select className="CurrencyChooser-select" onChange={this.props.onChange} ><option>EUR</option><option>AUD</option><option>BGN</option><option>BRL</option><option>CAD</option><option>CHF</option><option>CNY</option><option>CZK</option><option>DKK</option><option>GBP</option><option>HKD</option><option>HRK</option><option>HUF</option><option>IDR</option><option>ILS</option><option>INR</option><option>ISK</option><option>JPY</option><option>KRW</option><option>MXN</option><option>MYR</option><option>NOK</option><option>NZD</option><option>PHP</option><option>PLN</option><option>RON</option><option>RUB</option><option>SEK</option><option>SGD</option><option>THB</option><option>TRY</option><option>USD</option><option>ZAR</option></select>
            </label>
        );
    }
}


export default Country;