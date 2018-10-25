import React from 'react';
import Friends from "./Friends"

const FriendsList = props => {
   
    return (
        <div>
        <ul>
           {props.friends.name}
        </ul>
        </div>
    )
}

export default FriendsList