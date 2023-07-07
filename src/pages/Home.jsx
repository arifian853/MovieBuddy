/* eslint-disable react/prop-types */
import { Greetings } from "../components/Greetings"
import { MovieList } from "../components/MovieList"
import { Navbar } from "../components/Navbar"

export const Home = ({ movies }) => {
    return (
        <div>
            <Navbar />
            <Greetings />
            <MovieList movies={movies} />
        </div>
    )
}
