import React from 'react';
import { connect } from 'react-redux';
import ProductList from '../views/ProductList';
import { addToBag } from '../../actions';
import { searchText } from '../../../utils';

const mapStateToProps = function(store) {
	const query = store.searchState.query;
	const products = store.productState.products;
	const filteredProducts = query != '' ? products.filter(searchText(query)) : products;

	return {
		products: filteredProducts
	}
}

const mapDispatchToProps = function(dispatch) {
	return {
		onAddToBag(product) {
			dispatch(addToBag(product));
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductList);