import React from 'react';
import { connect } from 'react-redux';
import Search from '../views/Search';

const mapStateToProps = function(store) {
	return {
		query: store.searchState.query
	}
}

const mapDispatchToProps = function(dispatch) {
	return {
		onInputChange(e) {
			dispatch({
				type: 'USER_UPDATE_QUERY',
				query: e.target.value
			});
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Search);