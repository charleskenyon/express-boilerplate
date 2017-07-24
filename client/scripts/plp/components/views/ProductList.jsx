import React from 'react';
import Product from './Product';

const ProductList = props => (
	<ul>
		{props.products.map(product => (
			<Product key={product.id} product={product} />
		))}
	</ul>
)

export default ProductList;