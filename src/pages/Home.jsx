import React from 'react';
import { useState, useEffect } from 'react';
import { imdb_page, page, geeet } from '../services/movies_services';
import { Link, Navigate, redirect, useHref, useNavigate, useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { render } from '@testing-library/react';
import error from '../Assets/404-error.png';


function Home() {
    const [movies, setmovies] = useState([]);
    const [page, setPage] = useState(1);
    const navigate = useNavigate();

    var { pagee } = useParams();
    useEffect(() => {
        imdb_page(page)
            .then(res => setmovies(res.data.results))
            .catch(err => { throw err })

    }, [page])

    return (
        <>
            <section className='mov w-75 mx-auto my-5' id='mov'>
                <div className="row">
                    {movies.length > 0 &&

                        movies.map((movie, index) => (


                            <div className="col-lg-4 col-md-6 col-sm-12 my-5">
                                <div className="card  position-relative" style={{ width: "18rem" }} key={index}>
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt={movie.thumbnail}></img>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <h5 className="card-title">{movie.title} ({movie.release_date.slice(0, 4)})</h5>
                                            <p className='text-end fw-bold p-1 w-25 text-center rounded bg-danger text-white'>{movie.vote_average}</p>
                                        </div>

                                        <div className="text-overlay">
                                            <p>{movie.overview}</p>
                                        </div>
                                    </div>


                                </div>
                            </div>


                        ))


                    }
                </div>
            </section>

            <div>
                <ul className="pagination justify-content-center">
                    <button className='btn btn-danger mx-3' onClick={() => setPage(page - 1)} disabled={page == 1}>
                        <a className='text-white text-decoration-none' href='#mov'>Previous</a>
                    </button>
                    <button className='btn btn-danger mx-3' onClick={() => {setPage(page + 1)}}>
                        <a className='text-white text-decoration-none' href='#mov'>Next</a>
                    </button>
                </ul>
            </div>

        </>
    );
}

export default Home;