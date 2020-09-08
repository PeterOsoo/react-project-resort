import React from "react"
import "./App.css"
import { Home } from "./components/Home"
import { Rooms } from "./components/Rooms"
import SingleRoom from "./components/SingleRoom"
import Error from "./components/Error"

const App = () => {
	return (
		<div>
			<h1>Beach Resort</h1>
			<Home />
			<Rooms />
			<SingleRoom />
			<Error />
		</div>
	)
}

export default App
