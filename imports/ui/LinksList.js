import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';

import { apiLinks } from '../api/links';
import LinksListItem from './LinksListItem';

export default class LinksList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			links: []
		};
	}
	componentDidMount() {
		console.log('componentDidMount LinksList');
		this.linksTracker = Tracker.autorun(() => {
			Meteor.subscribe('links');
			const links = apiLinks.find({
				visible: Session.get('showVisible')
			}).fetch();
			this.setState({ links });
		});
	}

	componentWillUnmount() {
		console.log('componentWillUnmount LinksList');
		this.linksTracker.stop();
	}

	renderLinksListItems() {
		return this.state.links.map((link) => {
			const shortUrl = Meteor.absoluteUrl(link._id);
			return <LinksListItem key = {link._id} shortUrl = {shortUrl} {...link} />
			// return (
			// 	<p key={link._id}>{link.url}</p>
			// );
		});
	}

	render() {
		return (
			<div>
				<p>Links List </p>
				{this.renderLinksListItems()}
			</div>
		);
	}
}