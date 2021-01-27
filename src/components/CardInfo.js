import React from 'react';
import {useSpring, animated} from 'react-spring';

function CardInfo (props){

    const style= useSpring({opacity: 1, from: {opacity:0}});
    return(
        
        <animated.div className="i-card-info" style={style}>
            <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"></link>
            <p className="i-card-title">{props.title}</p>
            <p className="i-card-sub-title">{props.subtitle}</p>
            <a href={props.link} target="blank" rel="noopener noreferrer">View</a>
        </animated.div>
    );

}
export default CardInfo;

// info for each card 