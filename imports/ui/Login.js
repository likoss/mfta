import React from 'react'; //default class
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: ''
		};
	}
	
	onSubmit(e) {
		e.preventDefault();
		
		let email = this.refs.email.value.trim();
		let password = this.refs.password.value.trim();

		Meteor.loginWithPassword({email}, password, (err) => {
			console.log(err);
			if (err) {
				this.setState({error: err.reason});
			} else {
				this.setState({error: ''});
			}
		});

	};

	render() {
		return (
			<div>
			<h2>Login component here</h2>
			{this.state.error ? <p>{this.state.error}</p> : undefined} {/*Undeinfed: not render anything*/}

			<form onSubmit={this.onSubmit.bind(this)}>
				<input type="email" ref="email" name="email" placeholder="Email" />
				<input type="password" ref="password" name="password" placeholder="Password" />
				<button>Login</button>
			</form>

			<Link to='/signup'>Have an account?</Link>
			</div>		
		);
	};
};
