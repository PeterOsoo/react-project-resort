import React from "react"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import { Link } from "react-router-dom"
import RoomsContainer from "../components/RoomsContainer"

const Rooms = () => {
	return (
		<React.Fragment>
			<Hero hero="roomsHero">
				<Banner title="Our rooms">
					<Link to="/" className="btn-primary">
						{" "}
						Return Home
					</Link>
				</Banner>
			</Hero>
			<RoomsContainer />
		</React.Fragment>
	)
}

export default Rooms
