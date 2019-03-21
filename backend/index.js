// index.js
const Koa = require('koa');
const KoaBody = require('koa-body');

const index = new Koa();

// Set up body parsing middleware
index.use(KoaBody());

// Require the Router we defined in urls.
let urls = require('./urls.js');

// Use the Router on the sub route /urls
index.use(urls.routes());

// Make the running app on port possible
app.listen(8080);
