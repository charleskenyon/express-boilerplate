const Product = require('../../models/product.js');

const home = function(req, res) {
	res.set('Link', '</main.css>; rel=preload; as=style');
  res.render('home');
}

const getProducts = function(req, res) {
	const amount = req.params.amount;
	const q = Product.find().limit(parseInt(amount));

	q.exec(function(err, products) {
		if (err) res.sendStatus(500, 'Error occured: database error.');
		res.json(products.map(function(v) {
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
		}));
	});
}

module.exports = {home, getProducts};