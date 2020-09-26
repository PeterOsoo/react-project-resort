import React, { useContext } from "react"
import { RoomContext } from "../context"
import Title from "./Title"

function RoomsFilter() {
	const context = useContext(RoomContext)
	console.log(context)

	return <div>rooms filter</div>
}

export default RoomsFilter
