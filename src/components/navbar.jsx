import React, { useEffect, useState } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';

function Navbar() {
    const [search, set_search] = useState();

    const navigate = useNavigate();

    const handleclick = (event) => {
        event.preventDefault();
        navigate(`/search/${search}`)

    }

    const genreData = [
        { id: 28, name: 'Action' },
        { id: 12, name: 'Adventure' },
        { id: 16, name: 'Animation' },
        { id: 35, name: 'Comedy' },
        { id: 80, name: 'Crime' },
        { id: 99, name: 'Documentary' },
        { id: 18, name: 'Drama' },
        { id: 10751, name: 'Family' },
        { id: 14, name: 'Fantasy' },
        { id: 36, name: 'History' },
        { id: 27, name: 'Horror' },
        { id: 10402, name: 'Music' },
        { id: 9648, name: 'Mystery' },
        { id: 10749, name: 'Romance' },
        { id: 878, name: 'Science Fiction' },
        { id: 10770, name: 'TV Movie' },
        { id: 53, name: 'Thriller' },
        { id: 10752, name: 'War' },
        { id: 37, name: 'Western' },
      ];
    return (<>

        <nav className="navbar navbar-expand-lg navbar bg-black navbar-dark py-4 ">
            <div className="container">
                <Link className="navbar-brand fs-1" to="/">MovieRoom</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown mx-3">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Type
                            </Link>
                            <ul className="dropdown-menu">
                                {genreData.map((genre,index)=>(
                                    <li><Link className="dropdown-item" to={`/${genre.id}`}>{genre.name}</Link></li>
                                ))}
                                <li><Link className="dropdown-item" to="/28/action">Action</Link></li>
                                <li><Link className="dropdown-item" to="/drama">Drama</Link></li>
                            </ul>
                        </li>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => { set_search(e.target.value) }} />
                            <button className="btn btn-outline-danger" type="submit" onClick={handleclick}>Search</button>
                        </form>

                    
                    </ul>
                </div>
            </div>
        </nav>

    </>);
}

export default Navbar;