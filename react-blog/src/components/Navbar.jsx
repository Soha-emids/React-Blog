import {Link} from 'react-router-dom';

const Navbar=() => {
    return (
        <nav className="navbar navbar-dark fs-4" style={{backgroundColor: '#457b9d'}}>
            <div className="container">
                <Link className='navbar-brand fs-4' to={"/"}>My Blog</Link>
                <ul className='navbar-nav flex-row'>
                    <li className='nav-item me-3'>
                        <Link className='nav-link' to={"/"}>Home</Link>
                    </li>
                    <li className='nav-item me-3'>
                        <Link className='nav-link' to={"/posts"}>Posts</Link>
                    </li>
                    <li className='nav-item me-3'>
                        <Link className='nav-link' to={"/about"}>About</Link>
                    </li>
                    <li className='nav-item me-3'>
                        <Link className='nav-link' to={"/contact"}>Contact</Link>
                    </li>

                </ul>

            </div>

        </nav>
    )
}
export default Navbar;