import React, { Component } from "react"

import { RoomContext } from "../context"

class FeaturedRooms extends Component {
	static contextType = RoomContext
	render() {
		const value = this.context
		console.log(value)
		return <div>hello from featured rooms {value} </div>
	}
}

export default FeaturedRooms
