/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom"
import { BsStarFill } from 'react-icons/bs'


export const Details = ({ movies }) => {
    let { id } = useParams()
    const movie = movies.filter((item) => {
        return item.id == id;
    })
    console.log(movie)
    const IMG_URL = 'https://image.tmdb.org/t/p/w500'
    const { poster_path, title, release_date, overview, popularity,original_language, vote_average } = movie[0]
    return (

        <div className="details-page">
            <div className="main-details" key={id}>

                <div className="left">
                    <img src={IMG_URL + poster_path} alt="" />
                    <div className="title-details">
                        <h1 className="font-black text-1xl">{title}</h1>
                        <p>Release date: {release_date}</p>
                        <p></p>
                    </div>
                </div>

                <div className="right">
                    <h1 className="text-3xl font-black">{title} </h1>
                    <span className="rating flex items-center justify-center"><BsStarFill />{`${vote_average}/10`}</span>
                    <p className="font-black"> Language : {original_language}</p>
                    <p className="font-black">Popularity : {popularity}</p>
                    <div className="synopsis"> <b>Synopsis :</b> {overview}</div>
                    <p></p>
                </div>

            </div>
        </div>
    )
}
