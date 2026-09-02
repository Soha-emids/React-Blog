import {Link} from 'react-router-dom';
import React from 'react';


const NotFound=()=>{
return (
    <div className="text-center mt-5">
        <h1 className="display-4">404 - Page Not Found</h1>
        <p className="lead">Oops! The page you're loading for doesn't exist</p>
        <Link to='/' className='btn btn-primary mt-3'>Return Home</Link>
    </div>
);
};

export default NotFound;