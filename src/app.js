import { App, corelib } from '@mikosoft/dodo';
import views from './views.js';


// conf
import { $debugOpts, authOpts } from './conf/index.js';


// controllers
import HomeCtrl from './controllers/HomeCtrl.js';
import ControllerHooksCtrl from './controllers/ControllerHooksCtrl.js';
import ModelCtrl from './controllers/ModelCtrl.js';
import View_ddIncCtrl from './controllers/View_ddIncCtrl.js';
import NotfoundCtrl from './controllers/NotfoundCtrl.js';


// routes
const routes = [
  ['when', '/', 'HomeCtrl'],
  ['when', '/controller-hooks', 'ControllerHooksCtrl'],
  ['when', '/controller-hooks-same', 'ControllerHooksCtrl'],
  ['when', '/model', 'ModelCtrl'],
  ['when', '/view-ddinc', 'View_ddIncCtrl'],
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
    NotfoundCtrl
  ]);

app
  .auth(auth) // needed for route authGuards
  .debugger($debugOpts);

app
  .routes(routes)
  .viewsCached(views);
