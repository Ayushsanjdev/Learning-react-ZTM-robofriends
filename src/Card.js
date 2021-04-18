import React from 'react';

const Card = (props) => {
    return (
        <div className= 'bg-light-yellow br3 pa3 ma2 dib grow bw2 shadow-5 tc'>
            <img src='https://robohash.org/cool?200x200' alt='robots' />
            <h2>{props.name}</h2>
            <p>{props.username}</p>
            <p>{props.email}</p>
        </div>
    )
}

export default Card;