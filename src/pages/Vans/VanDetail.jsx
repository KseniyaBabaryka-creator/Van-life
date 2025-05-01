import React from "react"
import { useParams } from "react-router-dom"

export default function VanDetail() {
	const params = useParams();
	const [van, setVan] = React.useState(null);

	React.useEffect(() => {
		fetch(`/api/vans/${params.id}`)
		.then(response => response.json())
		.then(data => setVan(data.vans))
	}, [params.id]);

	

   return (
		<div className="container">
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