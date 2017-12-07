import React from 'react'; //default class

import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinksListFilters from './LinksListFilters';

export default () => {
	return (
		<div>
			<PrivateHeader title="Your links" />
			<LinksListFilters/>
			<LinksList/>
			<AddLink/>
		</div>
	);
};

// export default class Links extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<PrivateHeader title="Your links" />
// 				<LinksList/>
// 				<AddLink/>
// 			</div>
// 		);
// 	};
// };
