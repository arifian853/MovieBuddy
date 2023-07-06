import { Greetings } from "../components/Greetings"
import { MovieList } from "../components/MovieList"
import { Navbar } from "../components/Navbar"

export const Home = () => {
    return (
        <div>
            <Navbar />
            <Greetings />
            <MovieList />
        </div>
    )
}
