import React from 'react';
import { Link } from 'react-router-dom';

export default function HostVans(){
	const [vans, setVans] = React.useState([]);

	React.useEffect(() => {
		fetch('/api/host/vans')
		.then(response => response.json())
		.then(data => setVans(data.vans))
	}, []);

	const VansElements = vans.map(van => {
		return(
			<li key={van.id} >
				<Link to={`/host/vans/${van.id}`} className="van__card">
					<img src={van.imageUrl} alt="Van picture" className="van__card-img" />
					<div className="van__card-info">
						<h3 className="van__card-name">{van.name}</h3>
						<p className="van__card-price">${van.price}/day</p>
					</div>
				</Link>
			</li>
		)
	})

	return(
		<div className="container">
			<h2 className="van__title">Your listed vans</h2>
			<ul className="van__card-list">
				{VansElements}
			</ul>
		</div>
	)
}