import React from 'react';
import createClass from 'create-react-class';
import ProductListContainer from './containers/ProductListContainer';
import SearchContainer from './containers/SearchContainer';

const Plp = createClass({

	render() {
		return (
			<div className="plp">
				<SearchContainer />
				<ProductListContainer />
			</div>
		)
	}

});

export default Plp;