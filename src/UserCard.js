import React from 'react';
import { Link } from 'react-router-dom';

const Usercard = ({user}) => (
    <div className='userCard'>
        <h1>{user.name[0]}</h1>
        <h4>{user.name}</h4>
        <h5>@{user.username}</h5>
        <h5>{user.website}</h5>
        <Link to={`users/${user.id}`}>More Details</Link>
    </div>
);

export default Usercard;