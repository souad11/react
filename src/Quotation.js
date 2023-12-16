import {data} from './data.js';
import React from 'react';

function Quotation({count, shuffle, author}) {

    count = data.length
    if(count > 1) {
    return (<>
        <p>{count}</p>
        
    </>)
    }



}

export default Quotation;