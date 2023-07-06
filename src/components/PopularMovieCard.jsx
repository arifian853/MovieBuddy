import { useState, useEffect } from "react";
import axios from "axios";

export const PopularMovieCard = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=6ff0f97c700b7989b21b3dfe42786a3f")
            .then(response => {
                setMovies(response.data.results);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    return (

        <>
            {movies.map(movie => (
                <div className="movie-card shadow-lg" key={movie.id}>
                    <img src={IMG_URL + movie.poster_path} alt="" />
                    <div className="title">
                        <h1 className="font-black text-1xl">{movie.title}</h1>
                        <p>Release date: {movie.release_date}</p>
                    </div>
                    <div className="btn-bottom">
                        <a href=""><button className="">Details </button></a>
                    </div>
                </div>
            ))}
        </>

    );
};

