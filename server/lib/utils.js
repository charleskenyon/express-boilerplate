const createPreloadedState = function(products, basket={ basket: [], total: 0 }) {
	return {
		productState: { 
			products,
			isFetching: false 
		},
		basketState: {
			...basket,
			isFetching: false
		},
		searchState: {
			query: ''
		}
	}
}

module.exports = { createPreloadedState };