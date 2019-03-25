import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.mount('super-blog', { resetNamespace: true, path: '/blog' });
  this.mount('super-blog', { as: 'dev-blog', path: '/dev-blog' });
});

export default Router;
