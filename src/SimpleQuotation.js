import {data} from './data.js';
import React from 'react';

function SimpleQuotation() {
    let indexAleatoire = Math.floor(Math.random() * data.length);
    let quoteAleatoire = data[indexAleatoire].quote;

        return <p>{quoteAleatoire}</p>

}


export default SimpleQuotation;