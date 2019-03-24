// urls.js
const Router = require('koa-router');

const router = new Router ({
	prefix: '/urls'
});

router.get('/', (ctx, next) => {
	ctx.body = urls;
	next();
});

// moke urls refs
let urls = [
	{id:101, type:'Image', name:'Desk Hero'},
	{id:102, type:'Image', name:'Mobile Hero'},
	{id:103, type:'Image', name:'Laptop Hero'},
	{id:104, type:'Logo', name:'Hero Logo'}
];

module.exports = router;
