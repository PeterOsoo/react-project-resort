import React, { Component } from "react"
import items from "./data"

const RoomContext = React.createContext()

class RoomProvider extends Component {
	state = {
		rooms: [],
		sortedRooms: [],
		featuredRooms: [],
		loading: true,

		//changes to conext

		type: "all",
		capacity: 1,
		price: 0,
		minPrice: 0,
		maxPrice: 0,
		minSize: 0,
		maxSize: 0,
		breakfast: false,
		pets: false,
	}
	//get data

	componentDidMount() {
		// this.getData
		let rooms = this.formatData(items)
		let featuredRooms = rooms.filter(room => room.featured === true)

		//changes to conext

		let maxPrice = Math.max(...rooms.map(item => item.price))
		let maxSize = Math.max(...rooms.map(item => item.size))

		this.setState({
			rooms,
			featuredRooms,
			sortedRooms: rooms,
			loading: false,
			//changes to conext
			price: maxPrice,
			maxPrice,
			maxSize,
		})
	}

	formatData(items) {
		let tempItems = items.map(item => {
			let id = item.sys.id
			let images = item.fields.images.map(image => image.fields.file.url)

			let room = { ...item.fields, images, id }
			return room
		})
		return tempItems
	}

	getRoom = slug => {
		let tempRooms = [...this.state.rooms]
		//looking for 1 object
		const room = tempRooms.find(room => room.slug === slug)
		return room
	}

	//handle change
	handleChange = event => {
		const target = event.target
		const value = target.type === "checkbox" ? target.checked : target.value
		const name = target.name
		console.log(name, value)

		this.setState(
			{
				[name]: value,
			},
			this.filterRooms
		)
	}

	filterRooms = () => {
		let {
			rooms,
			type,
			capacity,
			price,
			minSize,
			maxSize,
			breakfast,
			pets,
		} = this.state
	}

	render() {
		return (
			<RoomContext.Provider
				value={{
					...this.state,
					getRoom: this.getRoom,
					handleChange: this.handleChange,
				}}
			>
				{this.props.children}
			</RoomContext.Provider>
		)
	}
}

const RoomConsumer = RoomContext.Consumer

// HOC
export function withRoomConsumer(Component) {
	return function ConsumerWrapper(props) {
		return (
			<RoomConsumer>
				{value => <Component {...props} context={value} />}
			</RoomConsumer>
		)
	}
}

export { RoomProvider, RoomConsumer, RoomContext }
