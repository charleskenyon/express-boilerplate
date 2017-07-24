const initialProductState = {
	products: []
}

const productReducer = function(state = initialProductState, action) {

	switch (action.type) {
		case 'PRODUCT_LIST_SUCCESS': 
			return Object.assign({}, state, { products: action.products });
	}

	return state;
}

export default productReducer;