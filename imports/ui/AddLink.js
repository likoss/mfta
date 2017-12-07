import React from 'react';
import { Meteor } from 'meteor/meteor';
import Modal from 'react-modal';

export default class AddLink extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			url: '',
			isOpen: false
		}
	}

	onSubmit(e) {
	const { url } = this.state;

	e.preventDefault();
	if (url) {
		Meteor.call('links.insert', url, (err, res) => {
			if (!err) {
				this.setState({ url: '', isOpen: false, error: '' });	
			} else {
				this.setState({ error: err.reason });
			}
		});
		}
	}
	
	onChange(e) {
		this.setState({
			url: e.target.value.trim()
		});
	}

	render() {
		return (
			<div>
				<button onClick={() => this.setState({isOpen: true})}>+ Add Link</button>
				<Modal isOpen={this.state.isOpen} contentLabel="Add link" >
					<p>Add Link</p>
					{this.state.error ? <p>{this.state.error}</p> : undefined }
					<form onSubmit={this.onSubmit.bind(this)}>
						<input 
							type="text" 
							ref="url" 
							placeholder="URL" 
							value={this.state.url} 
							onChange={this.onChange.bind(this)}/>
						<button>Add Link</button>
					</form>
					<button onClick={() => this.setState({ isOpen: false, url: '', error: ''})}>Cancel</button>
				</Modal>
			</div>
		);
	}
};