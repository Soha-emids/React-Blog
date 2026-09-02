import {Link} from 'react-router-dom';

const Home=() =>{
return (
    <div>
        <div className='bg-success text-white p-5 mb-4 rounded-3'>
            <div className='container'>
                <h1 className='display-4 fw-bold'>Welcome to my Blog</h1>
                <p className='fs-4'>This is a simple blog application built with React, Bootstrap, and JSONPlaceholder API.</p>

                <Link 
               className='btn btn-light btn-lg' to={'/posts'}>View All Posts</Link>
            </div>
        </div>

        <div className='container'>
            <h2>Latest Posts</h2>
            <p>Navigate to the Posts page to see all available posts.</p>
        </div>
    </div>
)
}

export default Home;