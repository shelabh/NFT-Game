import React from 'react';
import Navbar from '../Navbar/index'
import './index.css'

const Home = () => {
	return (
		<div className="view">
			{/* <Navbar /> */}
			
			{/* <iframe title="aniamtion" src='https://my.spline.design/untitled-b50b7a3e9557621da407363141311eed/' frameborder='0' width='100%' height='100%'></iframe> */}
			<div className='heading'>
				Forefront
			</div>
			{/* <iframe title="animation" src='https://my.spline.design/noisedisplacecopy-79115317a729056443f145c436fbedac/' frameborder='0' width='100%' height='100%'></iframe> */}
			
			<div className="nav">
				<button className='market'>
					Marketplace
				</button>
				<button className='market'>
					Sign In
				</button>
			</div>
		</div>
	)
}

export default Home