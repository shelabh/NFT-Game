import React from 'react';
import Navbar from '../Navbar/index'
import './index.css'

const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="home">
				<div className="heading">
					Fight the <span className=" ">Demon King</span> with your favourite NFT
				</div>
				<img src="/images/cyborg.png" alt=""/>
			</div>
		</div>
	)
}

export default Home