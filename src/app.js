import { App, corelib } from '@mikosoft/dodo';
import views from './views.js';


// conf
import { $debugOpts, authOpts } from './conf/index.js';


// controllers
import HomeCtrl from './controllers/HomeCtrl.js';
import ControllerHooksCtrl from './controllers/ControllerHooksCtrl.js';
import ModelCtrl from './controllers/ModelCtrl.js';
import View_ddIncCtrl from './controllers/View_ddIncCtrl.js';
import View_loadViewsCtrl from './controllers/View_loadViewsCtrl.js';
import View_lazyJSCtrl from './controllers/View_lazyJSCtrl.js';
import DataDdCtrl from './controllers/DataDdCtrl.js';
import DataDdListenersCtrl from './controllers/DataDdListenersCtrl.js';
import CookieCtrl from './controllers/CookieCtrl.js';
import NotfoundCtrl from './controllers/NotfoundCtrl.js';


// routes
const routes = [
  ['when', '/', 'HomeCtrl'],
  ['when', '/controller-hooks', 'ControllerHooksCtrl'],
  ['when', '/controller-hooks-same', 'ControllerHooksCtrl'],
  ['when', '/model', 'ModelCtrl'],
  ['when', '/view-ddinc', 'View_ddIncCtrl'],
  ['when', '/view-loadviews', 'View_loadViewsCtrl'],
  ['when', '/view-lazyjs', 'View_lazyJSCtrl'],
  ['when', '/datadd', 'DataDdCtrl'],
  ['when', '/dataddlisteners', 'DataDdListenersCtrl'],
  ['when', '/cookie', 'CookieCtrl'],
  ['notfound', 'NotfoundCtrl']
];

// auth
const auth = new corelib.Auth(authOpts);

// app
const app = new App();

app
  .controllers([
    HomeCtrl,
    ControllerHooksCtrl,
    ModelCtrl,
    View_ddIncCtrl,
    View_loadViewsCtrl,
    View_lazyJSCtrl,
    DataDdCtrl,
    DataDdListenersCtrl,
    CookieCtrl,
    NotfoundCtrl
  ]);

app
  .auth(auth) // needed for route authGuards
  .debugger($debugOpts);

app
  .routes(routes)
  .viewsCached(views);
