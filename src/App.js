import React from "react"
import "./App.css"
import Home from "./components/Home"
import Rooms from "./components/Rooms"
import SingleRoom from "./components/SingleRoom"
import Error from "./components/Error"

import { Route, Switch } from "react-router-dom"

const App = () => {
	return (
		<>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/rooms" component={Rooms} />
				<Route exact path="/rooms/:slug" component={SingleRoom} />

				<Route component={Error} />
			</Switch>
		</>
	)
}

export default App
