import React from "react";
import { Outlet, NavLink } from 'react-router-dom';

export default function HostLayout() {
	const active = {
		fontWeight: 'bold',
      textDecoration: 'underline',
      color: '#161616'
	};

    return (
		<>
			<header>
			<nav className='header__list'>
				<NavLink to="/host" end className='header__list-item'
				style={({isActive}) => isActive ? active : null}>Dashboard</NavLink>
				<NavLink to="income" className='header__list-item'
				style={({isActive}) => isActive ? active : null}>Income</NavLink>
				<NavLink to="vans" className='header__list-item'
				style={({isActive}) => isActive ? active : null}>Vans</NavLink>
				<NavLink to="reviews" className='header__list-item'
				style={({isActive}) => isActive ? active : null}>Reviews</NavLink>
			</nav>
			</header>
			<Outlet />
		</>
        
    )
}