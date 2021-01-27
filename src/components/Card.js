import React from 'react';
import CardInfo from '../components/CardInfo';

function Card(props){

    return(
        <div className="d-inline-block i-card" onClick={(e)=>props.click(props.item)}>
            <img className="i-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            {props.item.selected && <CardInfo title={props.item.title} subtitle={props.item.subtitle} link={props.item.link}/>}
        </div>
    );

}

export default Card;

//the "card" is for github, resume, and linkedin !
