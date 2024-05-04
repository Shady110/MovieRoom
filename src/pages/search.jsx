import React from 'react';
import { useState, useEffect, } from 'react';
import { useParams } from 'react-router-dom';
import { search_movies } from '../services/movies_services';
import error from '../Assets/404-error.png';

function Search() {
    const [movies, setmovies] = useState([]);
    const [page, setPage] = useState(1);

    const { name } = useParams();
    console.log(name)
    useEffect(() => {
        search_movies(name, page)
            .then(res => setmovies(res.data.results))
        console.log(movies)
    }, [name, page])


    return (
        <>
            <section className='w-75 mx-auto my-5' id='mov'>
                <div className="row">
                    {movies.length > 0 ? movies.length > 0 &&

                        movies.map((movie, index) => (


                            <div className="col-lg-4 col-md-6 col-sm-12 my-5">
                                <div className="card  position-relative" style={{ width: "18rem" }} key={index}>
                                    <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://marketplace.canva.com/EAFTl0ixW_k/1/0/1131w/canva-black-white-minimal-alone-movie-poster-YZ-0GJ13Nc8.jpg"} className="card-img-top" alt={"https://marketplace.canva.com/EAFTl0ixW_k/1/0/1131w/canva-black-white-minimal-alone-movie-poster-YZ-0GJ13Nc8.jpg"}></img>
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
                        :
                        <div className='mx-auto text-center'>
                            <img className='opacity-50 w-25' src={error} alt="" />
                            <h2 className='text-white' style={{ fontSize: "6rem" }}>sorry not found</h2>
                        </div>
                    }
                </div>
            </section>

            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <a className='text-white text-decoration-none' href='#mov'>
                        <button className='btn btn-danger mx-3' onClick={() => setPage(page - 1)} disabled={page === 1} value="Previous">
                    
                </button>
                </a>
                <button className='btn btn-danger mx-3' onClick={() => { setPage(page + 1) }}><a className='text-white text-decoration-none' href='#mov'>Next</a></button>
            </ul>
        </nav >
            
        </>
    );
}

export default Search;