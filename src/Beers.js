import React, { useState } from 'react';



function Beers(props){
    //const {name, image_url, description} = props
    const [isHidden, setHide] = useState(true)
    const [isLiked, setIsLiked] = useState(false)
    const handleClick = () => {
        setIsLiked(!isLiked)
      }
    return(
        <ul>
            {props.beers.map((beer, i) => (
                <li key = {i}>
                    <button onClick={handleClick}>
                        {isLiked===true?"LIKED" : "Not Liked"}
                    </button>
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