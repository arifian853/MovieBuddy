import { PopularMovieCard } from './PopularMovieCard'

export const MovieBody = ({ movies }) => {
    return (
        <>
            {
                movies.map((movie) => (
                    <PopularMovieCard />
                ))
            }
        </>
    )
}
