// app.js
const Koa = require('koa');
const KoaBody = require('koa-body');

const app = new Koa();

// Set up body parsing middleware
app.use(KoaBody());

// Require the Router we defined in urls.
let urls = require('./urls.js');

// Use the Router on the sub route /urls
app.use(urls.routes());

// Make the running app on port possible
app.listen(3001);
console.log('the server is running back there!');
