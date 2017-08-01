import React from 'react';
import { connect } from 'react-redux';
import Search from '../views/Search';
import { userUpdateQuery } from '../../actions';

const mapStateToProps = function(store) {
	return {
		query: store.searchState.query
	}
}

const mapDispatchToProps = function(dispatch) {
	return {
		onInputChange(e) {
			dispatch(userUpdateQuery(e.target.value));
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Search);