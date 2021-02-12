import { HashRouter, Route} from "react-router-dom"
import Home from "./routes/Home"
import About from  "./routes/About"
import Navigation from "./components/Navigation"
import Detail from "./routes/Detail"

function App() {
	return <HashRouter>
		<Navigation />
		<Route path="/" exact={true} component={Home}></Route>
		<Route path="/about/" exact={true} component={About}></Route>
		<Route path="/movie/:id/" component={Detail}></Route>
	</HashRouter>
}
 
export default App;
