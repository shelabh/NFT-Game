import './index.css'



const Signin = () => {
	return (
		<div className="page2">
			<div className="left">
				<div className="heading2">
					Ah! Look Who's Back
				</div>
				<div className="inputs">
					<input 
						type="text" 
						className="username" 
						placeholder='username' 
					/>
					<input 
						type="text" 
						className="password" 
						placeholder='password' 
					/>
				</div>
				<div className="btns">
					<button className="btn-signin">
						Sign In
					</button>
					<button className="btn-signup">
						Sign Up
					</button>
				</div>
			</div>
			<div className="right">
				<img src="/images/signin.png" alt="Signin" draggale="false" />
			</div>
		</div>
	)
}

export default Signin