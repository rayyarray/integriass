import {Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const UserDetail = () => {
    const [user, setUser] = useState(null);
    let {userId} = useParams();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId }`)
            .then(function (response) {
                setUser(response.data);
            })
            .catch(function (error) {
                setUser(null);
            });
        }, []);

    return user && (<div className='userDetail'>
        <h5>-name:{user.name}</h5>
        <h5>-username:{user.username}</h5>
        <h5>-email:{user.email}</h5>
        <h5>-phone:{user.phone}</h5>
        <h5>-company:{user.company.name}</h5>
        <h5>-website:{user.website}</h5>
        <h5>-address:<li>street:{user.address.street}</li>
            <li>suite:{user.address.suite}</li>
            <li>city:{user.address.city}</li>
            <li>zipcode:{user.address.zipcode}</li>
        </h5>
        <Link to='/'>Back</Link>
    </div>);

};

export default UserDetail;