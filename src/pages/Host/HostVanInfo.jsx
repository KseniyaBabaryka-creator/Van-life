import React from 'react';
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo(){
	const { van } = useOutletContext();

	return(
		<section>
         <h4>Name: <span className='hostvaninfo'>{van.name}</span></h4>
         <h4>Category: <span className="hostvaninfo">{van.type}</span></h4>
         <h4>Description: <span className="hostvaninfo">{van.description}</span></h4>
         <h4>Visibility: <span className="hostvaninfo">Public</span></h4>
      </section>
	)
}