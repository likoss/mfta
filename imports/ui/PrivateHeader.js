import React from 'react';
import Accounts from 'meteor/accounts-base';
import PropTypes from 'prop-types';

// export default class PrivateHeader extends React.Component {
// 	onLogout() {
// 		Accounts.logout();
// 		history.push('/');
// 	};
// 	render() {
// 		return (
// 			<div>
// 			<h1>{this.props.title}</h1>
// 			<button onClick={this.onLogout.bind(this)}>Logout</button>
// 			</div>
// 		);
// 	};
// };

const PrivateHeader = (props) => {			
	return (
		<div>
			<h1>{props.title}</h1>
 			<button onClick={() => Accounts.Logout()}>Logout</button>
		</div>
	);
};

PrivateHeader.propTypes = {
	title: PropTypes.string.isRequired
}

export default PrivateHeader;