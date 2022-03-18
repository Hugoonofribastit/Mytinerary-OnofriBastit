import React from "react";
import { connect } from 'react-redux';
import userActions from '../../Redux/actions/userActions';

function Container(props) {

	function SignOut() {
		props.SignOutUser(props.user.email)
	}

	return (
		<>
			{props.user ? <><h1>User Connected {props.user.name} {props.user.surname}  from {props.user.from[0]}</h1>
				<div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
					<button onClick={SignOut} className="btn btn-primary btn-block" style={{ maxWidth: 400 }}> SignOut </button>
				</div>
			</>
				: <h1>No user connected</h1>}
			<div className="d-flex flex-column justify-content-center align-items-center mb-5">
				<article className="card-body mx-auto" style={{ maxWidth: 400 }}>
					
					<p className="text-center">Get started with your free account</p>
						<p className="bg-light text-center">Or</p>
						<p className="bg-light text-center">SignIn here!</p>
				</article>
			</div>

		</>
	)

}
const mapStateToProps = (state) => {
	return {
		user: state.userReducer.user,
	}
}
const mapDispatchToProps = {
	SignOutUser: userActions.SignOutUser,

}



export default connect(mapStateToProps, mapDispatchToProps)(Container)



		{/* <BrowserRouter>
						<Routes>
							{!props.user &&<Route path="/" element={<SignIn />} />}
							{!props.user &&<Route path="/signup" element={<SignUp />} />}
						</Routes>
					</BrowserRouter> */}