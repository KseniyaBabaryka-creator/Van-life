import Footer from './Footer'
import bgImg from "../assets/about.png"
import { Link } from 'react-router-dom'

export default function About(){
	return(
		<>
			<main className='about__main'>
				<img src={bgImg} alt="About picture" className="about__img" />
				<div className="about__container">
					<h2 className="about__title">Don’t squeeze in a sedan when you could relax in a van.</h2>
					<p className="about__text">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
					(Hitch costs extra 😉)

					Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

					<div className="about__card">
						<h3 className="about__card-title">Your destination is waiting.
						Your van is ready.</h3>
						<Link className="about__btn" to="/vans">Explore our vans</Link>
					</div>
				</div>
			</main>
			<Footer />
		</>
	)
}