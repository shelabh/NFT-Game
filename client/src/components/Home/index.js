import React from 'react';
import { Link } from 'react-router-dom'
import './index.css'

const Home = () => {

	
	return (
		<div className="view">
			{/* <Navbar /> */}
			
			{/* <iframe title="aniamtion" src='https://my.spline.design/untitled-b50b7a3e9557621da407363141311eed/' frameborder='0' width='100%' height='100%'></iframe> */}
			<div className="connect">
				<button className="btn-connect">
					Connect Wallet
				</button>
			</div>
			<div className='heading'>
				Forefront
			</div>
			{/* <iframe title="animation" src='https://my.spline.design/noisedisplacecopy-79115317a729056443f145c436fbedac/' frameborder='0' width='100%' height='100%'></iframe> */}
			
			<div className="nav">
				<Link to="/marketplace">
					<button className='market'>
						Marketplace
					</button>
				</Link>
				<Link to="/signin">
					<button className='signin'>
						Sign In
					</button>
				</Link>
			</div>
			{/* <div className='banner'>
			<div className="animate">
						{
							[0,1,2,3,4,5,6,7,8,9,10,11].map((_i) => (
								<div className="text">
									• Exchange. Anytime. Anywhere at a lightning-fast speed because Time is money.&nbsp;&nbsp;&nbsp;
								</div>
							))
						}
					</div>
			</div> */}
			
		</div>
	)
}

export default Home