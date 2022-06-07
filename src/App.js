import React from 'react'

// Components
import MusicPlayer from './components/MusicPlayer'
import Navbar from './components/Navbar'
import AnimatedRoutes from './components/AnimatedRoutes'

function App() {
	return (
		<>
			<Navbar />
			<AnimatedRoutes />
			<MusicPlayer />
		</>
	)
}

export default App
