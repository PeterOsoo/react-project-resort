import React from "react"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import Services from "../components/Services"
import { Link } from "react-router-dom"
import FeaturedRooms from "../components/FeaturedRooms"

const Home = () => {
	return (
		<React.Fragment>
			<Hero hero="defaultHero">
				<Banner
					title="luxurious rooms"
					subtitle="deluxe rooms starting at Ksh 5000"
				>
					<Link to="/rooms" className="btn-primary">
						{" "}
						Our Rooms
					</Link>
				</Banner>
			</Hero>
			<Services />
			<FeaturedRooms />
		</React.Fragment>
	)
}

export default Home
