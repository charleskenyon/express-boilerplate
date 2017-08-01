const memoryCache = require('memory-cache');
const Product = require('../models/product');

const productsViewModel = async function(amount=100) {
	const key = `__MONGO_PRODUCTS__${amount}`;
	const cachedData = memoryCache.get(key);
	if (cachedData) return JSON.parse(cachedData);
	let response;

	try {

		const productsQuery = await Product.find().limit(parseInt(amount));
		
		response = productsQuery.map(v => {
			return {
				id: v._id,
				title: v.title,
				price: v.price,
				productNumber: v.productNumber,
				image: v.mainImage,
				category: v.category,
				color: v.color,
				size: v.size
			}
		});

		memoryCache.put(key, JSON.stringify(response), parseInt(1000 * 60));

	} catch (error) {
		response = { error: 'Error occured: database error.' };
	}

	return response;
}

module.exports = productsViewModel;