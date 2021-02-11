import React from "react"
import axios from "axios"

class App extends React.Component {

	state = {
		isLoading: true,
		movies: []
	}

	getMovies = async () => {
		const { data: { data: { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json")
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
