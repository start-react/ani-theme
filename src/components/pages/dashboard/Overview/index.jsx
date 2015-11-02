import NProgress from 'nProgress';

module.exports = {
  path: 'overview',
  getComponent(location, cb) {
  	NProgress.start();
  	console.log("after nProgress start");
    require.ensure([], (require) => {
    	require('nProgress').done();
      cb(null, require('./Overview'));
    });
  }
}