const React = require('react');
const { createStore } = require('redux');
const { Provider } = require('react-redux');
const { renderToString } = require('react-dom/server');
const Plp = require('../../../client/scripts/plp/components').default;
const reducers = require('../../../client/scripts/plp/reducers').default;
const productsViewModel = require('../../view-models/product');
const { createPreloadedState } = require('../../lib/utils');

const home = async function(req, res) {
	const productsQuery = await productsViewModel();
	if (productsQuery.error) res.sendStatus(500, productsQuery.error);
	const state = createPreloadedState(productsQuery, req.session.basket);
	const store = createStore(reducers, state);
	const preloadedState = store.getState();
	
	const html = renderToString(
		<Provider store={store}>
			<Plp />
		</Provider>
	);

	res.set('Link', '</main.css>; rel=preload; as=style');
  res.render('home', { html: html, preloadedState: JSON.stringify(preloadedState) });
}

const getProducts = async function(req, res) {
	const amount = req.params.amount;
	const productsQuery = await productsViewModel(amount);
	if (productsQuery.error) res.sendStatus(500, productsQuery.error);
	res.json(productsQuery);
}

const getBasket = function(req, res) {
	const day = 3600000 * 24;
	req.session.cookie.expires = new Date(Date.now() + day);
	const basket = req.session.basket || { basket: [], total: 0 };
	res.json(basket);
}

const postBasket = function(req, res) {
	req.session.basket = req.body;
	req.session.save();
	res.send({ success: true });
}

module.exports = { home, getProducts, getBasket, postBasket };