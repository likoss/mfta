import { Meteor } from 'meteor/meteor';
import React from 'react'; //default class
import { Router, Route, Switch, Redirect } from 'react-router-dom'; 
import history from '../api/history';

import Signup from '../ui/Signup';
import Links from '../ui/Links';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

export const routes = (
				<Router history={history}>
				<Switch>
					<Route path="/" exact render={props => (Meteor.userId()?<Redirect to='/links' />:<Login/>)} />
					<Route path="/signup" exact render={props => (Meteor.userId()?<Redirect to='/links' />:<Signup/>)} />
					<Route path="/links" exact render={props => (!Meteor.userId()?<Redirect to='/' />:<Links/>)} />
					<Route component={NotFound} />
				</Switch>
				</Router>
	);

export const onAuthChange = (isAuthenticated) => {
	const pathname = history.location.pathname;
	const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
	const isAuthenticatedPage = authenticatedPages.includes(pathname);

	if (isUnauthenticatedPage && isAuthenticated) {
		history.push('/links');
	}
	else if (isAuthenticatedPage && !isAuthenticated) {
		history.push('/');
	}
	};