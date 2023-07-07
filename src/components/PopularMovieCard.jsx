/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { BsArrowRightShort, BsStarFill } from 'react-icons/bs'

export const PopularMovieCard = ({ movies }) => {
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    return (

        <>
            {movies.map(movie => (
                <div className="movie-card shadow-lg" key={movie.id}>
                    <img src={IMG_URL + movie.poster_path} alt="" />
                    <div className="title">
                        <Link to={`/details/${movie.id}`}>
                            <h1 className="font-black text-1xl">{movie.title}</h1>
                        </Link>
                        <p>Release date: {movie.release_date}</p>
                    </div>
                    <Link to={`/details/${movie.id}`}>
                    <div className="btn-bottom flex flex-row items-center justify-between">
                        <button className="font-black flex gap-1 justify-center flex-row items-center">Details <BsArrowRightShort /></button>  <span className="rating flex items-center justify-center"><BsStarFill />{`${movie.vote_average}/10`}</span>
                    </div>
                    </Link>
                </div>
            ))}
        </>

    );
};

