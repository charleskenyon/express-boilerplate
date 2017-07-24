import React from 'react';
import createClass from 'create-react-class';
import { connect } from 'react-redux';
import axios from 'axios';
import store from '../../store';
import ProductList from '../views/ProductList';
import { searchText } from '../../../utils'

const ProductListContainer = createClass({

	componentWillMount() {
		axios.get('/products/100').then((response) => {
			store.dispatch({
				type: 'PRODUCT_LIST_SUCCESS',
				products: response.data
			});
		});
	},

	render() {
		return <ProductList products={this.props.products} />
		// return ProductList({ products: this.props.products });
	}

});

const mapStateToProps = function(store) {
	const query = store.searchState.query;
	const products = store.productState.products;
	const filteredProducts = query != '' ? products.filter(searchText(query)) : products;
	
	return {
		products: filteredProducts
	}
}

export default connect(mapStateToProps)(ProductListContainer);