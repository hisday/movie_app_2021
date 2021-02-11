import React from "react"
import axios from "axios"
import Movie from "./Movie"
import "./App.css"

class App extends React.Component {

	state = {
		isLoading: true,
		movies: []
	}

	getMovies = async () => {
		const { data: { data: { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
		console.log(movies);
		this.setState({ movies, isLoading: false })
	}

	componentDidMount() {
		console.log('componentDidMount')
		this.getMovies()
	}

	componentDidUpdate() {
		console.log("componentDidUpdate")
	}

	render() {
		const { isLoading, movies } = this.state
		console.log("render")
		return (
			<section className="container">
				{isLoading
					? <div className="loader">
						<span className="loader__text">Loading...</span>
					</div>
					:
					<div className="movies">
						{movies.map(
							movie => {
								return (
									<Movie
										key={movie.id}
										title={movie.title}
										year={movie.year}
										summary={movie.summary}
										id={movie.id}
										poster={movie.medium_cover_image} />
								)
							}
						)}
					</div>
				}
			</section>
		)
	}
}

export default App;
