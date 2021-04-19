import React from 'react';

const Card = ({name, email, username, id}) => {
    return (
        <div className= 'bg-light-grey br3 pa3 ma2 dib grow bw2 shadow-5 tc'>
            <img src={`https://robohash.org/${id}?size=200x200`} alt='robots' />
            <h2>{name}</h2>
            <p>{username}</p>
            <p>{email}</p>
        </div>
    )
}

export default Card;