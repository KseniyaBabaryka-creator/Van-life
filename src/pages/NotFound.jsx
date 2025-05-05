import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound(){
	return(
		<div className="container">
			<h2 className="title">
			Sorry, the page you were looking for was not found.
			</h2>
			<Link to='/' className="link-404">Return to home</Link>
		</div>
	)
}