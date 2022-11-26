import React from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const isAtAddPage = location.pathname == '/addPost';
    const isAtHomePage = location.pathname == '/';
    const isAtEditPage= location.pathname.includes('edit');
    const isAtViewPage= location.pathname.includes('view');
    const navigateToAddPost = () => {
        navigate('/addPost');
    };
    return (<nav className="navbar navbar-expand-lg nvbar-light" style={{ backgroundColor: '#A0E7E5' }}>
        <div style={{ marginLeft: '10px' }}>
            <img src="https://e7.pngegg.com/pngimages/818/335/png-clipart-graffiti-letter-alphabet-font-graffiti-letter-logo-silhouette-thumbnail.png" alt="Logo" height="40px" width="35px" />
        </div>
        <div className="container-fluid">
            <Link to={"/"} style={{ textDecoration: 'none', color: 'black' }}>Blog Post</Link>
            {isAtHomePage == false ? <Link to={"/"} style={{ textDecoration: 'none', color: 'black' }}><img src="https://freepngimg.com/thumb/home/11-2-home-picture.png" height="40px" width="60px" alt="Home" />
            </Link> : null}
        </div>
        <div>
            {(isAtAddPage || isAtEditPage || isAtViewPage) == false ? <button type="button" onClick={navigateToAddPost} className="btn btn-outline" style={{ backgroundColor: '#FBE7C6', marginRight: '10px', width: '100px', borderRadius: '40px' }}>
                Add Post</button> : null}
        </div>
    </nav>);
}

export default Navbar;