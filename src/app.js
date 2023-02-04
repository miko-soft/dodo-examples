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
import BrowserStorageCtrl from './controllers/BrowserStorageCtrl.js';
import FormCtrl from './controllers/FormCtrl.js';
import LoginFormCtrl from './controllers/LoginFormCtrl.js';
import LoginDashboardCtrl from './controllers/LoginDashboardCtrl.js';
import Navig1Ctrl from './controllers/Navig1Ctrl.js';
import Navig2Ctrl from './controllers/Navig2Ctrl.js';
import PaginatorCtrl from './controllers/PaginatorCtrl.js';
import AntiflickCtrl from './controllers/AntiflickCtrl.js';
import I18nCtrl from './controllers/I18nCtrl.js';
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
  ['when', '/browserstorage', 'BrowserStorageCtrl'],
  ['when', '/form', 'FormCtrl'],

  ['when', '/login-form', 'LoginFormCtrl', { authGuards: ['autoLogin'] }],
  ['when', '/developer/login-dashboard', 'LoginDashboardCtrl', { authGuards: ['isLogged', 'hasRole'] }],

  ['when', '/navig1', 'Navig1Ctrl'],
  ['when', '/navig2', 'Navig2Ctrl'],
  ['redirect', '/navig3', '/navig1'],

  ['when', '/paginator', 'PaginatorCtrl'],
  ['when', '/antiflick', 'AntiflickCtrl'],
  ['when', '/i18n', 'I18nCtrl'],

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
    BrowserStorageCtrl,
    FormCtrl,
    LoginFormCtrl,
    LoginDashboardCtrl,
    Navig1Ctrl,
    Navig2Ctrl,
    PaginatorCtrl,
    AntiflickCtrl,
    I18nCtrl,
    NotfoundCtrl
  ]);

app
  .auth(auth) // needed for route authGuards
  .debugger($debugOpts);

app
  .routes(routes)
  .viewsCached(views);
