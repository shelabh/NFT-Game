import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './index.css'

const Home = () => {
	// State
	const [currentAccount, setCurrentAccount] = useState(null);

	// Actions
	const checkIfWalletIsConnected = async () => {
		try {
			const { ethereum } = window;
	
			if (!ethereum) {
				console.log('Make sure you have MetaMask!');
				return;
			} else {
				console.log('We have the ethereum object', ethereum);
	
				const accounts = await ethereum.request({ method: 'eth_accounts' });
	
				if (accounts.length !== 0) {
					const account = accounts[0];
					console.log('Found an authorized account:', account);
					setCurrentAccount(account);
					
				} else {
					console.log('No authorized account found');
				}
			}
		} catch (error) {
			console.log(error);
		}
	};

	/*
   	* Implement your connectWallet method here
   	*/
	const connectWalletAction = async () => {
		try {
		  	const { ethereum } = window;
	    
		 	if (!ethereum) {
		    		alert('Get MetaMask!');
		    		return;
		  	}
	    
			/*
		   	* Fancy method to request access to account.
		   	*/
		  	const accounts = await ethereum.request({
		    		method: 'eth_requestAccounts',
		 	});
	    
		  	/*
		  	 * Boom! This should print out public address once we authorize Metamask.
		   	*/
		  	console.log('Connected', accounts[0]);
		  	setCurrentAccount(accounts[0]);
			if (currentAccount === accounts) {
				alert('You have authorized the account');
			}
		} catch (error) {
		  	console.log(error);
		}
	};
	    
	useEffect(() => {
		checkIfWalletIsConnected();
	}, []);

	return (
		<div className="page1">
			{/* <Navbar /> */}
			
			{/* <iframe title="aniamtion" src='https://my.spline.design/untitled-b50b7a3e9557621da407363141311eed/' frameborder='0' width='100%' height='100%'></iframe> */}
			<div className="connect">
				<button className="btn-connect" onClick={connectWalletAction}>
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