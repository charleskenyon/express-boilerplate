const app = require('express')();
const db = require('./lib/db');
const middleware = require('./middleware');
const routes = require('./routes');
const exphbs = require('express-handlebars');
const path = require('path');

const handlebarsConfig = {
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.resolve(__dirname, 'views/layouts')
}

app.engine('.hbs', exphbs(handlebarsConfig));
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', '.hbs');
app.set('port', process.env.PORT || 3000);
app.disable('x-powered-by');

app.use(middleware);
app.use(routes);

module.exports = app;