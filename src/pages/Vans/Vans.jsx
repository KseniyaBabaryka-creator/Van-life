import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getVans } from '../../API';

export default function Vans(){

	const [searchParams, setSearchParams ] = useSearchParams();
	const [vans, setVans] = React.useState([]);
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState(null);

	const typeFilter = searchParams.get('type');

	React.useEffect(() => {
		async function loadVans() {
			 setLoading(true)
			 try {
				  const data = await getVans()
				  setVans(data)
				  
			 } catch(err) {
				  console.log("There was an error!")
				  console.log(err)
				  setError(err)
			 }finally {
				setLoading(false)
		  }
		}
		
		loadVans()
  }, [])

	const filteredVans = !typeFilter ? vans : vans.filter(v => v.type === typeFilter);

	const vansElements = filteredVans.map(van => {
		return(
			<div key={van.id} className='van__tile'>
				<Link 
					to={van.id} 
					state={{ 
					search: `?${searchParams.toString()}`,
					type: typeFilter
				   }}
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
	});

	function handleFilterChange(key, value) {
		setSearchParams(prevParams => {
			 if (value === null) {
				  prevParams.delete(key)
			 } else {
				  prevParams.set(key, value)
			 }
			 return prevParams
		})
  }

	if (loading) {
		return <h1>Loading...</h1>
	}

	if (error) {
		return <h1>There was an error: {error.message}</h1>
  }

	return(
		<main>
			<div className="container">
				<h1 className='van__title'>Explore our van options</h1>
				<div className="van-list-filter-buttons">
            <button 
				onClick={() => handleFilterChange("type", "simple")}
				className={`van-type simple ${typeFilter === "simple" ? 'selected' : ''}`}>Simple</button>
            <button
				onClick={() => handleFilterChange("type", "luxury")}
				className={`van-type luxury ${typeFilter === "luxury" ? 'selected' : ''}`}>Luxury</button>
				<button
				onClick={() => handleFilterChange("type", "rugged")}
				className={`van-type rugged ${typeFilter === "rugged" ? 'selected' : ''}`}>Rugged</button>
				{typeFilter && <button
				onClick={() => handleFilterChange("type", null)}
				className='van-type clear-filters'>Clear filter</button>}
            </div>
				<ul className="van__list">
					{vansElements}
				</ul>
			</div>
		</main>
	)
}