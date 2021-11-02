import React, { useState } from 'react';



function Beers(props){
    const [isHidden, setHide] = useState(true)
    return(
        <ul>
            {props.beers.map((beer) => (
                <li>
                    <p><b>{beer.name}</b></p>
                    <img 
                    src={beer.image_url} style={{width: '35px'}} alt={beer.name}
                    onClick={() => {isHidden ? setHide(false) : setHide(true)}}>
                    </img>
                    {isHidden ? <div></div> :
                    <div>
                        <p>{beer.description}</p>
                    </div>
                    }
                    <br></br>
                </li>
            ))}
        </ul>
    );
}

export default Beers;