import React, { useState } from 'react';
import Beer from './Beer';



function Beers(props){
    //const {name, image_url, description} = props
    
    return(
        <ul>
            {props.beers.map((beer) => {
                return(
                    <Beer beer={beer}/>
                );
        })}
        </ul>
    );
}

export default Beers;