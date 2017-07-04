const app = require('./app');
const http = require('http');

function server() {
  http.createServer(app).listen(app.get('port'), () => {
    console.log(`Express started on http://localhost:${app.get('port')}; press Ctrl-C to terminate.`);
  });
}

module.exports = server;