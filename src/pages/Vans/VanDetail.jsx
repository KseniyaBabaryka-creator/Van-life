import React from "react"
import { useParams, Link, useLocation } from "react-router-dom"

export default function VanDetail() {
	const params = useParams();
	const location = useLocation();
	console.log(location);
	const [van, setVan] = React.useState(null);

	React.useEffect(() => {
		fetch(`/api/vans/${params.id}`)
		.then(response => response.json())
		.then(data => setVan(data.vans))
	}, [params.id]);

	const search = location.state?.search || "";
	const type = location.state?.type || 'all';

   return (
		<div className="container">
		<Link
		 to={`..${search}`}
		 relative="path"
		 className="back-button"
		>&larr; <span>Back to {type} vans</span></Link>
		
			{van ? (
				<div className="van-detail">
					<img src={van.imageUrl} alt="Van photo" className="van-detail__img" />
					<i className={`van__type ${van.type} selected`}>{van.type}</i>
					<h2 className="van-detail__title">{van.name}</h2>
					<p className="van-detail__price">${van.price}<span>/day</span></p>
					<p className="van-detail__desc">{van.description}</p>
					<button className="van-detail__btn">Rent this van</button>
				</div>
			) : <h2>Loading...</h2>}
		</div>
	)
}