import React from "react"

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/")
        }
    }

    render() {
        const { location } = this.props
        console.log(location.state)
        if (location.state === undefined) {
            return null
        } else {
            return <h1> {location.state.title } </h1>
        }
    }
}

export default Detail;
