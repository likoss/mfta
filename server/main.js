import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
import moment from 'moment';

import '../imports/api/users';
import { apiLinks } from '../imports/api/links';
import '../imports/startup/simple-schema-configuration.js';

Meteor.startup(() => {
	let momentNow = moment();
	

	WebApp.connectHandlers.use((req, res, next) => {
		const _id = req.url.slice(1);
		const link = apiLinks.findOne({ _id });
		
		if (link) {
			res.statusCode = 302;
			res.setHeader('Location', link.url);
			res.end();
			Meteor.call('links.trackVisit', _id);
		} else {
			next();
		}
	});

  // code to run on server at startup
	// WebApp.connectHandlers.use((req, res, next) => {
	// 	console.log('Custom middleware');
	// 	console.log(req.url, req.method, req.headers, req.query);
	// 	//Set HTTP status code
	// 	res.statusCode = 404;
	// 	//Set HTTP headers
	// 	res.setHeader('my-custom-header', 'Header');
	// 	//Set HTTP body
	// 	//res.write('<h1>This is my middleware!</h1>');
	// 	//End HTTP request
	// 	res.end();

	// 	next();
	// });
});


