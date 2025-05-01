import React from 'react';
import { useParams, Link, NavLink, Outlet } from "react-router-dom";


export default function HostVansDetail(){
	const params = useParams();
	const [van, setVan] = React.useState(null);

	React.useEffect(() => {
		fetch(`/api/host/vans/${params.id}`)
		.then(response => response.json())
		.then(data => setVan(data.vans))
	}, []);

	if (!van) {
		return <h1>Loading...</h1>
   }

	const active = {
		fontWeight: 'bold',
      textDecoration: 'underline',
      color: '#161616'
	};


	return(
		<section className="container">
			<Link to=".." relative="path" className="back-link">&larr; Back to all vans</Link>
			<div className="hostvan__container">
				<div className="hostvan__info">
					<img src={van.imageUrl} alt="Van photo" className="hostvan__img" />
					<div className="hostvan__text">
						<i className={`van__type ${van.type} selected`}>{van.type}</i>
						<h3 className="hostvan__title">{van.name}</h3>
						<p className="hostvan__price">${van.price}/day</p>
					</div>
				</div>
				<nav className='header__list'>
				<NavLink to="." end className='header__list-item'
				style={({isActive}) => isActive ? active : null}>Details</NavLink>
				<NavLink to="pricing" className='header__list-item'
				style={({isActive}) => isActive ? active : null}>Pricing</NavLink>
				<NavLink to="photos" className='header__list-item'
				style={({isActive}) => isActive ? active : null}>Photos</NavLink>
			</nav>
			<Outlet context={{ van }}/>
			</div>
		</section>
	)
}