import { useState, useEffect } from 'react'
import './styles/all.scss'
import Menu from './components/Menu'
import Header from './components/Header'
import About from './components/About.jsx'
import Works from './components/Works.jsx'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx'
import Services from './components/Services.jsx'
import Quote from './components/Quote.jsx'
import RotateLoader from 'react-spinners/ClipLoader'

function App() {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false)
		}, 500)

		return () => clearTimeout(timer)
	}, [])

	return (
		<>
			{loading ? (
				<div className='loading-spinner'>
					<RotateLoader color='#5a4b2d' loading={true} size={50} />
				</div>
			) : (
				<div className='App'>
					<Menu />
					<Header />
					<About />
					<Services />
					<Works />
					<Quote />
					<Contact />
					<Footer />
				</div>
			)}
		</>
	)
}

export default App
