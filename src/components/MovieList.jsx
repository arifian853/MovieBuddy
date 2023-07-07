/* eslint-disable react/prop-types */
import { PopularMovieCard } from "./PopularMovieCard"


export const MovieList = ({ movies }) => {
    return (
        <div className="popular flex justify-start align-middle p-12 flex-col gap-5">
            <h1 className="font-black text-2xl">Popular Movies</h1>
            <div className="container-popular">
                <PopularMovieCard movies={movies} />
            </div>
        </div>
    )
}
