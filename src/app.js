import { App } from '@mikosoft/dodo';

// conf
import { $debugOpts, $auth, $httpClient } from './conf/index.js';

// auth gurads
const autoLogin = $auth.autoLogin.bind($auth);
const isLogged = $auth.isLogged.bind($auth);
const hasRole = $auth.hasRole.bind($auth);


// controllers
import HomeCtrl from './controllers/HomeCtrl.js';
import NotfoundCtrl from './controllers/NotfoundCtrl.js';

import ControllerHooksCtrl from './controllers/controller/ControllerHooksCtrl.js';

import ViewDdViewInnerCtrl from './controllers/view/ViewDdViewInnerCtrl.js';
import ViewDdViewPrependCtrl from './controllers/view/ViewDdViewPrependCtrl.js';
import ViewDdViewAppendCtrl from './controllers/view/ViewDdViewAppendCtrl.js';
import ViewDdViewSiblingCtrl from './controllers/view/ViewDdViewSiblingCtrl.js';
import ViewDdViewNestedCtrl from './controllers/view/ViewDdViewNestedCtrl.js';
import ViewEmptyViewCtrl from './controllers/view/ViewEmptyViewCtrl.js';
import ViewGrabFileContentCtrl from './controllers/view/ViewGrabFileContentCtrl.js';
import ViewLoadJSCtrl from './controllers/view/ViewLoadJSCtrl.js';
import ViewDdLazyjsCtrl from './controllers/view/ViewDdLazyjsCtrl.js';
import ViewExeJSCtrl from './controllers/view/ViewExeJSCtrl.js';
import ViewLoadCSSCtrl from './controllers/view/ViewLoadCSSCtrl.js';
import ViewPlugCSSCtrl from './controllers/view/ViewPlugCSSCtrl.js';
import ViewHeadSettersCtrl from './controllers/view/ViewHeadSettersCtrl.js';
import ViewLoadI18nCtrl from './controllers/view/ViewLoadI18nCtrl.js';

import DdShowCtrl from './controllers/dd/DdShowCtrl.js';
import DdDisabledCtrl from './controllers/dd/DdDisabledCtrl.js';
import DdCheckedCheckboxesCtrl from './controllers/dd/DdCheckedCheckboxesCtrl.js';
import DdCheckedRadiosCtrl from './controllers/dd/DdCheckedRadiosCtrl.js';
import DdSelectedCtrl from './controllers/dd/DdSelectedCtrl.js';
import DdClassCtrl from './controllers/dd/DdClassCtrl.js';
import DdStyleCtrl from './controllers/dd/DdStyleCtrl.js';
import DdSrcCtrl from './controllers/dd/DdSrcCtrl.js';
import DdAttrCtrl from './controllers/dd/DdAttrCtrl.js';
import DdValueCtrl from './controllers/dd/DdValueCtrl.js';
import DdSetinitialCtrl from './controllers/dd/DdSetinitialCtrl.js';
import DdElemCtrl from './controllers/dd/DdElemCtrl.js';

import DdTextCtrl from './controllers/dd/DdTextCtrl.js';
import DdMustacheCtrl from './controllers/dd/DdMustacheCtrl.js';
import DdHtmlCtrl from './controllers/dd/DdHtmlCtrl.js';
import DdIfCtrl from './controllers/dd/DdIfCtrl.js';
import DdIfGroupsCtrl from './controllers/dd/DdIfGroupsCtrl.js';
import DdIfNestedCtrl from './controllers/dd/DdIfNestedCtrl.js';
import DdForeachCtrl from './controllers/dd/DdForeachCtrl.js';
import DdForeachSimpleCtrl from './controllers/dd/DdForeachSimpleCtrl.js';
import DdForeachNestedCtrl from './controllers/dd/DdForeachNestedCtrl.js';
import DdForeachNested2Ctrl from './controllers/dd/DdForeachNested2Ctrl.js';
import DdForeachNested3Ctrl from './controllers/dd/DdForeachNested3Ctrl.js';
import DdForeachIfCtrl from './controllers/dd/DdForeachIfCtrl.js';
import DdForeachMustacheCtrl from './controllers/dd/DdForeachMustacheCtrl.js';
import DdForeachTextCtrl from './controllers/dd/DdForeachTextCtrl.js';
import DdForeachHtmlCtrl from './controllers/dd/DdForeachHtmlCtrl.js';
import DdForeachOptionCtrl from './controllers/dd/DdForeachOptionCtrl.js';
import DdRepeatCtrl from './controllers/dd/DdRepeatCtrl.js';
import DdRepeatMustacheCtrl from './controllers/dd/DdRepeatMustacheCtrl.js';

import DdHrefCtrl from './controllers/ddListeners/DdHrefCtrl.js';
import DdClickCtrl from './controllers/ddListeners/DdClickCtrl.js';
import DdKeyupCtrl from './controllers/ddListeners/DdKeyupCtrl.js';
import DdChangeCtrl from './controllers/ddListeners/DdChangeCtrl.js';
import DdEvtCtrl from './controllers/ddListeners/DdEvtCtrl.js';
import DdSetCtrl from './controllers/ddListeners/DdSetCtrl.js';
import DdModelCtrl from './controllers/ddListeners/DdModelCtrl.js';
import DdModelDdSetCtrl from './controllers/ddListeners/DdModelDdSetCtrl.js';

import ModelBasicCtrl from './controllers/model/ModelBasicCtrl.js';
import ModelMultilevelObjectCtrl from './controllers/model/ModelMultilevelObjectCtrl.js';

import AuthLoginCtrl from './controllers/lib/auth/AuthLoginCtrl.js';
import AuthDashboardCtrl from './controllers/lib/auth/AuthDashboardCtrl.js';
import FormCtrl from './controllers/lib/FormCtrl.js';
import Navig1Ctrl from './controllers/lib/navig/Navig1Ctrl.js';
import Navig2Ctrl from './controllers/lib/navig/Navig2Ctrl.js';
import CookieCtrl from './controllers/lib/CookieCtrl.js';
import BrowserStorageCtrl from './controllers/lib/BrowserStorageCtrl.js';
import PaginatorCtrl from './controllers/lib/PaginatorCtrl.js';





// routes
const $routes = [
  ['when', '/', HomeCtrl],

  ['when', '/controller/hooks', ControllerHooksCtrl],
  ['when', '/controller/hooks-same', ControllerHooksCtrl],

  ['when', '/view/ddview-inner', ViewDdViewInnerCtrl],
  ['when', '/view/ddview-prepend', ViewDdViewPrependCtrl],
  ['when', '/view/ddview-append', ViewDdViewAppendCtrl],
  ['when', '/view/ddview-sibling', ViewDdViewSiblingCtrl],
  ['when', '/view/ddview-nested', ViewDdViewNestedCtrl],
  ['when', '/view/emptyview', ViewEmptyViewCtrl],
  ['when', '/view/grabfilecontent', ViewGrabFileContentCtrl],
  ['when', '/view/loadjs', ViewLoadJSCtrl],
  ['when', '/view/ddlazyjs', ViewDdLazyjsCtrl],
  ['when', '/view/exejs', ViewExeJSCtrl],
  ['when', '/view/loadcss', ViewLoadCSSCtrl],
  ['when', '/view/plugcss', ViewPlugCSSCtrl],
  ['when', '/view/headsetters', ViewHeadSettersCtrl],
  ['when', '/view/loadi18n', ViewLoadI18nCtrl],

  ['when', '/dd/dd-show', DdShowCtrl],
  ['when', '/dd/dd-disabled', DdDisabledCtrl],
  ['when', '/dd/dd-checked-checkboxes', DdCheckedCheckboxesCtrl],
  ['when', '/dd/dd-checked-radios', DdCheckedRadiosCtrl],
  ['when', '/dd/dd-selected', DdSelectedCtrl],
  ['when', '/dd/dd-class', DdClassCtrl],
  ['when', '/dd/dd-style', DdStyleCtrl],
  ['when', '/dd/dd-src', DdSrcCtrl],
  ['when', '/dd/dd-attr', DdAttrCtrl],
  ['when', '/dd/dd-value', DdValueCtrl],
  ['when', '/dd/dd-setinitial', DdSetinitialCtrl],
  ['when', '/dd/dd-elem', DdElemCtrl],

  ['when', '/dd/dd-text', DdTextCtrl],
  ['when', '/dd/dd-mustache', DdMustacheCtrl],
  ['when', '/dd/dd-html', DdHtmlCtrl],
  ['when', '/dd/dd-if', DdIfCtrl],
  ['when', '/dd/dd-if-groups', DdIfGroupsCtrl],
  ['when', '/dd/dd-if-nested', DdIfNestedCtrl],
  ['when', '/dd/dd-foreach', DdForeachCtrl],
  ['when', '/dd/dd-foreach-simple', DdForeachSimpleCtrl],
  ['when', '/dd/dd-foreach-nested', DdForeachNestedCtrl],
  ['when', '/dd/dd-foreach-nested2', DdForeachNested2Ctrl],
  ['when', '/dd/dd-foreach-nested3', DdForeachNested3Ctrl],
  ['when', '/dd/dd-foreach-if', DdForeachIfCtrl],
  ['when', '/dd/dd-foreach-mustache', DdForeachMustacheCtrl],
  ['when', '/dd/dd-foreach-text', DdForeachTextCtrl],
  ['when', '/dd/dd-foreach-html', DdForeachHtmlCtrl],
  ['when', '/dd/dd-foreach-option', DdForeachOptionCtrl],
  ['when', '/dd/dd-repeat', DdRepeatCtrl],
  ['when', '/dd/dd-repeat-mustache', DdRepeatMustacheCtrl],

  ['when', '/ddlisteners/dd-href', DdHrefCtrl],
  ['when', '/ddlisteners/dd-click', DdClickCtrl],
  ['when', '/ddlisteners/dd-keyup', DdKeyupCtrl],
  ['when', '/ddlisteners/dd-change', DdChangeCtrl],
  ['when', '/ddlisteners/dd-evt', DdEvtCtrl],
  ['when', '/ddlisteners/dd-set', DdSetCtrl],
  ['when', '/ddlisteners/dd-model', DdModelCtrl],
  ['when', '/ddlisteners/dd-model-dd-set', DdModelDdSetCtrl],

  ['when', '/model/basic', ModelBasicCtrl],
  ['when', '/model/multilevel-object', ModelMultilevelObjectCtrl],

  ['when', '/lib/auth/login', AuthLoginCtrl, { authGuards: [autoLogin] }],
  ['when', '/lib/auth/developer/dashboard', AuthDashboardCtrl, { authGuards: [isLogged, hasRole] }],
  ['when', '/lib/form', FormCtrl],
  ['when', '/lib/navig1', Navig1Ctrl],
  ['when', '/lib/navig2', Navig2Ctrl],
  ['redirect', '/lib/navig3', '/lib/navig1'],
  ['when', '/lib/cookie', CookieCtrl],
  ['when', '/lib/browserstorage', BrowserStorageCtrl],
  ['when', '/lib/paginator', PaginatorCtrl],

  ['notfound', NotfoundCtrl]
];


// app
const initApp = async () => {
  const app = new App('dodoExamples');

  await app.i18n();

  app
    .auth($auth)
    .httpClient($httpClient)
    .debug($debugOpts)
    .routes($routes)
    .listen();
};

initApp().catch(console.error);



