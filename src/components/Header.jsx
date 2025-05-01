import { NavLink, Link } from 'react-router-dom';
export default function Header(){

	const active = {
		fontWeight: 'bold',
      textDecoration: 'underline',
      color: '#161616'
	};

	return(
		<header>
			<Link className="logo" to="/">#VanLife</Link>
			<nav className='header__list'>
				<NavLink to="/host" className='header__list-item' 
				style={({isActive}) => isActive ? active : null}>Host</NavLink>
				<NavLink to="/about" className='header__list-item'
				style={({isActive}) => isActive ? active : null}>About</NavLink>
				<NavLink to="/vans" className='header__list-item'
				style={({isActive}) => isActive ? active : null}>Vans</NavLink>
			</nav>
		</header>
	)
}