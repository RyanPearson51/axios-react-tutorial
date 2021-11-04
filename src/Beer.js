import React, {useState} from 'react'

export default function Beer(props) {
    const [isHidden, setHide] = useState(true)
    const [isLiked, setIsLiked] = useState(false)
    const handleClick = () => {
        setIsLiked(!isLiked)
      }
    return (
        <li>
                    <button onClick={handleClick}>
                        {isLiked===true?"LIKED" : "Not Liked"}
                    </button>
                    <p><b>{props.beer.name}</b></p>
                    <img 
                    src={props.beer.image_url} style={{width: '35px'}} alt={props.beer.name}
                    onClick={() => {isHidden ? setHide(false) : setHide(true)}}>
                    </img>
                    {isHidden ? <div></div> :
                    <div>
                        <p>{props.beer.description}</p>
                    </div>
                    }
                    <br></br>
                </li>
    )
}
