import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';

import { routes, onAuthChange } from '../imports/routes/routes';
import { apiLinks } from '../imports/api/links';
import '../imports/startup/simple-schema-configuration.js';

Tracker.autorun(() => {
	const isAuthenticated = !!Meteor.userId();
	onAuthChange(isAuthenticated);
});

// Stateless functional components
const myComponent = () => {
	return (
		<div>
			<h1>My Component is here!</h1>
		</div>
	);	
};

Meteor.startup(() => {
	Session.set('showVisible', true);
	ReactDOM.render(routes, document.getElementById('app'));
});