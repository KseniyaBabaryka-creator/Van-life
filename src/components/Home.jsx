import Footer from './Footer'
import { Link } from 'react-router-dom'

export default function Home(){
	return (
		<>
			<main className='home__main'>
				<h1 className="home__title">You got the travel plans, we got the travel vans.</h1>
				<p className="home__text">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
				<Link to="vans" className="home__btn">Find your van</Link>
			</main>
			<Footer />
		</>
	)
}