import React from 'react'; //default class
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component {
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

		if (password.length < 6) {
			return this.setState({ error: 'password must be more than 6 characters long'});
		}

		Accounts.createUser({email, password}, (err) => {
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
			<h1>Sign up here!</h1>
			
			{this.state.error ? <p>{this.state.error}</p> : undefined} {/*Undeinfed: not render anything*/}

			<form onSubmit={this.onSubmit.bind(this)}>
				<input type="text" ref="email" name="email" placeholder="Email" />
				<input type="password" ref="password" name="password" placeholder="Password" />
				<button>Create Account</button>
			</form>

			<Link to='/'>Already have an account</Link>
			</div>
		);
	};
};
