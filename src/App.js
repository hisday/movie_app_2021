import React from "react"
import axios from "axios"

class App extends React.Component {
	state = {
		isLoading: true,
		movies: []
	}

	getMovies = () => {
		const context = this
		axios.get("https://yts.mx/api/v2/list_movies.json")
			.then(function (response) {
				const { data: {data: {movies}}} = response
				console.log(movies);
				context.setState({ movies, isLoading: false })
			})
			.catch(function (error) {
				console.log(error);
			})
			.then(function () {
			});
	}

	componentDidMount() {
		console.log('componentDidMount')
		this.getMovies()
	}

	componentDidUpdate() {
		console.log("componentDidUpdate")
	}

	render() {
		const { isLoading } = this.state
		console.log("render")
		return (
			<div>
				<h4>{isLoading ? 'We are preparing' : 'We are ready'}</h4>
			</div>
		)
	}
}

export default App;
