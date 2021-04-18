import React from 'react';
import Card from './Card';
// import {robots} from './robots';

const CardList = ({robots}) => {
    const AllRobots = robots.map((user, i) => {
        return <Card id={robots[i].id} name={robots[i].name} username={robots[i].username} email={robots[i].email}/>
    })

    return (
        <div>
            {<AllRobots/>}
    </div>
    )
}

export default CardList;