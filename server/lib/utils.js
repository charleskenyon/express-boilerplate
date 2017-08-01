const createPreloadedState = function(products, basket) {
	return {
		productState: { 
			products,
			isFetching: false 
		},
		basketState: {
			...basket,
			isFetching: false,
		},
		searchState: {
			query: ''
		}
	}
}

module.exports = { createPreloadedState };