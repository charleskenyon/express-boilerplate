import React from 'react';

const Product = props => (
	<li>{props.product.title} - {props.product.color}</li>
)

export default Product;