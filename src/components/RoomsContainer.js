import React from "react"
import { withRoomConsumer } from "../context"
import Loading from "./Loading"
import RoomsFilter from "./RoomsFilter"
import RoomsList from "./RoomsList"

function RoomContainer({ context }) {
	const { loading, sortedRooms, rooms } = context
	if (loading) {
		return <Loading />
	}
	return (
		<React.Fragment>
			<RoomsFilter rooms={rooms} />
			<RoomsList rooms={sortedRooms} />
		</React.Fragment>
	)
}

export default withRoomConsumer(RoomContainer)

//new way above using HOC

// old way //

// import React from "react"
// import RoomsFilter from "./RoomsFilter"
// import RoomsList from "./RoomsList"
// import { RoomConsumer } from "../context"
// import Loading from "./Loading"

// function RoomsContainer() {
// 	return (
// 		<RoomConsumer>
// 			{value => {
// 				const { loading, sortedRooms, rooms } = value
// 				// console.log(value)
// 				if (loading) {
// 					return <Loading />
// 				}
// 				return (
// 					<>
// 						rooms container
// 						<RoomsFilter rooms={rooms} />
// 						<RoomsList rooms={sortedRooms} />
// 					</>
// 				)
// 			}}
// 		</RoomConsumer>
// 	)
// }

// export default RoomsContainer
