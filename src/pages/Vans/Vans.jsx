import React from 'react'
import { Link } from 'react-router-dom'

export default function Vans(){
	const [vans, setVans] = React.useState([]);

	React.useEffect(() => {
		fetch("/api/vans")
		.then(response => response.json())
		.then(data => setVans(data.vans))
	}, []);

	const vansElements = vans.map(van => {
		return(
			<div key={van.id} className='van__tile'>
				<Link 
					to={`/vans/${van.id}`} 
					aria-label={`View details for ${van.name}, 
										priced at $${van.price} per day`}
				>
					<img src={van.imageUrl} alt='Van image' className='van__img'/>
					<div className="van__info">
						<h3 className="van__name">{van.name}</h3>
						<p className="van__price">{van.price}<span>/day</span></p>
					</div>
					<i className={`van__type ${van.type} selected`}>{van.type}</i>
				</Link>
			</div>
		)
	})

	return(
		<main>
			<div className="container">
				<h1 className='van__title'>Explore our van options</h1>
				<ul className="van__list">
					{vansElements}
				</ul>
			</div>
		</main>
	)
}