import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from '/src/components/Home'
import About from '/src/components/About'

function App() {
  return (
	<BrowserRouter>
		<header>
			<Link className="logo" to="/">#VanLife</Link>
			<nav className='header__list'>
				<Link to="/about" className='header__list-item'>About</Link>
			</nav>
		</header>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
		</Routes>
	</BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
	<App />
);
