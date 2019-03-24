// urls.js
const Router = require('koa-router');

const router = new Router ({
	prefix: '/urls'
});

router.get('/:id', (ctx, next) => {
  let getCurrentUrl = urls.filter(function(url) {
	if (url.id == ctx.params.id) {
		return true;
	}
	
  });

  if (getCurrentUrl.length) {
  	ctx.body = getCurrentUrl[0];
  } else {
  	ctx.response.status = 404;
  	ctx.body = 'Media Not Reached';
  }
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
