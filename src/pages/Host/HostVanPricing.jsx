import React from 'react';
import { useOutletContext } from "react-router-dom";

export default function HostVanPricing(){
	const { van } = useOutletContext();

	return(
		<section>
			<h3 className="hostvanpricing">${van.price}.00<span className='day'>/day</span></h3>
		</section>
	)
}