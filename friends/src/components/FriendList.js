import React from "react";

const FriendList = props => (
    <div className="friendList">
        {props.friends.map((friend) => (
            <div className="FriendContainer" key={friend.id}>
                <p>Name: {friend.name}</p>
                <p>Age: {friend.age}</p>
                <p>Email: {friend.email}</p>
            </div>
        ))}
    </div>
);

export default FriendList;
