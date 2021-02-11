import React from "react"
import PropTypes from "prop-types"

function Movie({title, year, summary, poster}) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}/>
            <div className="movie__data" style={{backgroundColor: "gray"}}>
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <p className="movie__summary">{summary}</p>
            </div>
            <br/>
            <br/> 
        </div>
    )
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie