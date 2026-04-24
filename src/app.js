import { App } from '@mikosoft/dodo';

// conf
import { $debugOpts, $auth, $httpClient } from './conf/index.js';

// language files
import $i18n from './i18n/index.js';

// auth gurads
const autoLogin = $auth.autoLogin.bind($auth);
const isLogged = $auth.isLogged.bind($auth);
const hasRole = $auth.hasRole.bind($auth);


// controllers
import HomeCtrl from './controllers/HomeCtrl.js';
import NotfoundCtrl from './controllers/NotfoundCtrl.js';

// controller
import ControllerHooksCtrl from './controllers/controller/ControllerHooksCtrl.js';

// view directives
import ViewDdViewInnerCtrl from './controllers/view/ViewDdViewInnerCtrl.js';
import ViewDdViewSiblingCtrl from './controllers/view/ViewDdViewSiblingCtrl.js';
import ViewDdViewPrependCtrl from './controllers/view/ViewDdViewPrependCtrl.js';
import ViewDdViewAppendCtrl from './controllers/view/ViewDdViewAppendCtrl.js';
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
import ViewUnloadAllCSSCtrl from './controllers/view/ViewUnloadAllCSSCtrl.js';
import ViewSetCSSVarCtrl from './controllers/view/ViewSetCSSVarCtrl.js';
import ViewSetFaviconCtrl from './controllers/view/ViewSetFaviconCtrl.js';
import ViewSetMetaTagCtrl from './controllers/view/ViewSetMetaTagCtrl.js';
import ViewScrollToCtrl from './controllers/view/ViewScrollToCtrl.js';
import ViewPreloadLinkCtrl from './controllers/view/ViewPreloadLinkCtrl.js';


// general directives
import DdSetinitialCtrl from './controllers/dd/DdSetinitialCtrl.js';
import DdElemCtrl from './controllers/dd/DdElemCtrl.js';

import DdTextCtrl from './controllers/dd/DdTextCtrl.js';
import DdTextMethodCtrl from './controllers/dd/DdTextMethodCtrl.js';
import DdTextMathCtrl from './controllers/dd/DdTextMathCtrl.js';
import DdTextTernaryCtrl from './controllers/dd/DdTextTernaryCtrl.js';
import DdTextConcatCtrl from './controllers/dd/DdTextConcatCtrl.js';
import DdTextEachCtrl from './controllers/dd/DdTextEachCtrl.js';
import DdHtmlCtrl from './controllers/dd/DdHtmlCtrl.js';

import DdIfCtrl from './controllers/dd/DdIfCtrl.js';
import DdIfExpressionCtrl from './controllers/dd/DdIfExpressionCtrl.js';
import DdIfExpressionArrCtrl from './controllers/dd/DdIfExpressionArrCtrl.js';
import DdIfGroupsCtrl from './controllers/dd/DdIfGroupsCtrl.js';
import DdIfNestedCtrl from './controllers/dd/DdIfNestedCtrl.js';

import DdVisibleCtrl from './controllers/dd/DdVisibleCtrl.js';

import DdValueCtrl from './controllers/dd/DdValueCtrl.js';
import DdDisabledCtrl from './controllers/dd/DdDisabledCtrl.js';
import DdCheckedCheckboxesCtrl from './controllers/dd/DdCheckedCheckboxesCtrl.js';
import DdCheckedRadiosCtrl from './controllers/dd/DdCheckedRadiosCtrl.js';
import DdSelectedCtrl from './controllers/dd/DdSelectedCtrl.js';
import DdClassCtrl from './controllers/dd/DdClassCtrl.js';
import DdStyleCtrl from './controllers/dd/DdStyleCtrl.js';
import DdSrcCtrl from './controllers/dd/DdSrcCtrl.js';
import DdAttrCtrl from './controllers/dd/DdAttrCtrl.js';
import DdReadonlyCtrl from './controllers/dd/DdReadonlyCtrl.js';
import DdRequiredCtrl from './controllers/dd/DdRequiredCtrl.js';
import DdPlaceholderCtrl from './controllers/dd/DdPlaceholderCtrl.js';
import DdTitleCtrl from './controllers/dd/DdTitleCtrl.js';
import DdDataCtrl from './controllers/dd/DdDataCtrl.js';
import DdMinCtrl from './controllers/dd/DdMinCtrl.js';
import DdMaxCtrl from './controllers/dd/DdMaxCtrl.js';


// cloner directives
import DdEachSimpleCtrl from './controllers/ddCloners/DdEachSimpleCtrl.js';
import DdEachDoubledollarCtrl from './controllers/ddCloners/DdEachDoubledollarCtrl.js';
import DdEachDoubledollarSubpropertyCtrl from './controllers/ddCloners/DdEachDoubledollarSubpropertyCtrl.js';
import DdEachCtrl from './controllers/ddCloners/DdEachCtrl.js';
import DdEachOptionCtrl from './controllers/ddCloners/DdEachOptionCtrl.js';
import DdEachHtmlCtrl from './controllers/ddCloners/DdEachHtmlCtrl.js';
import DdEach3DdataCtrl from './controllers/ddCloners/DdEach3DdataCtrl.js';
import DdEach2Ctrl from './controllers/ddCloners/DdEach2Ctrl.js';
import DdEach2ComplexCtrl from './controllers/ddCloners/DdEach2ComplexCtrl.js';
import DdRepeatCtrl from './controllers/ddCloners/DdRepeatCtrl.js';
import DdEntriesCtrl from './controllers/ddCloners/DdEntriesCtrl.js';


// listener directives
import DdHrefCtrl from './controllers/ddListeners/DdHrefCtrl.js';
import DdClickCtrl from './controllers/ddListeners/DdClickCtrl.js';
import DdKeyupCtrl from './controllers/ddListeners/DdKeyupCtrl.js';
import DdChangeCtrl from './controllers/ddListeners/DdChangeCtrl.js';
import DdEvtCtrl from './controllers/ddListeners/DdEvtCtrl.js';
import DdSetCtrl from './controllers/ddListeners/DdSetCtrl.js';
import DdModelCtrl from './controllers/ddListeners/DdModelCtrl.js';
import DdModelDdSetCtrl from './controllers/ddListeners/DdModelDdSetCtrl.js';
import DdOutclickCtrl from './controllers/ddListeners/DdOutclickCtrl.js';
import DdIntersectCtrl from './controllers/ddListeners/DdIntersectCtrl.js';
import DdSwipeCtrl from './controllers/ddListeners/DdSwipeCtrl.js';


// model
import ModelBasicCtrl from './controllers/model/ModelBasicCtrl.js';
import ModelMultilevelObjectCtrl from './controllers/model/ModelMultilevelObjectCtrl.js';


// lib
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

  // controller
  ['when', '/controller/hooks', ControllerHooksCtrl],
  ['when', '/controller/hooks-same', ControllerHooksCtrl],

  // view
  ['when', '/view/ddview-inner', ViewDdViewInnerCtrl],
  ['when', '/view/ddview-sibling', ViewDdViewSiblingCtrl],
  ['when', '/view/ddview-prepend', ViewDdViewPrependCtrl],
  ['when', '/view/ddview-append', ViewDdViewAppendCtrl],
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
  ['when', '/view/unloadallcss', ViewUnloadAllCSSCtrl],
  ['when', '/view/setcssvar', ViewSetCSSVarCtrl],
  ['when', '/view/setfavicon', ViewSetFaviconCtrl],
  ['when', '/view/setmetatag', ViewSetMetaTagCtrl],
  ['when', '/view/scrollto', ViewScrollToCtrl],
  ['when', '/view/preloadlink', ViewPreloadLinkCtrl],


  // general directives
  ['when', '/dd/dd-setinitial', DdSetinitialCtrl],
  ['when', '/dd/dd-elem', DdElemCtrl],

  ['when', '/dd/dd-text', DdTextCtrl],
  ['when', '/dd/dd-text-method', DdTextMethodCtrl],
  ['when', '/dd/dd-text-math', DdTextMathCtrl],
  ['when', '/dd/dd-text-ternary', DdTextTernaryCtrl],
  ['when', '/dd/dd-text-concat', DdTextConcatCtrl],
  ['when', '/dd/dd-text-each', DdTextEachCtrl],
  ['when', '/dd/dd-html', DdHtmlCtrl],

  ['when', '/dd/dd-if', DdIfCtrl],
  ['when', '/dd/dd-if-expression', DdIfExpressionCtrl],
  ['when', '/dd/dd-if-expression-arr', DdIfExpressionArrCtrl],
  ['when', '/dd/dd-if-groups', DdIfGroupsCtrl],
  ['when', '/dd/dd-if-nested', DdIfNestedCtrl],
  ['when', '/dd/dd-visible', DdVisibleCtrl],
  ['when', '/dd/dd-value', DdValueCtrl],
  ['when', '/dd/dd-disabled', DdDisabledCtrl],
  ['when', '/dd/dd-checked-checkboxes', DdCheckedCheckboxesCtrl],
  ['when', '/dd/dd-checked-radios', DdCheckedRadiosCtrl],
  ['when', '/dd/dd-selected', DdSelectedCtrl],
  ['when', '/dd/dd-class', DdClassCtrl],
  ['when', '/dd/dd-style', DdStyleCtrl],
  ['when', '/dd/dd-src', DdSrcCtrl],
  ['when', '/dd/dd-attr', DdAttrCtrl],
  ['when', '/dd/dd-readonly', DdReadonlyCtrl],
  ['when', '/dd/dd-required', DdRequiredCtrl],
  ['when', '/dd/dd-placeholder', DdPlaceholderCtrl],
  ['when', '/dd/dd-title', DdTitleCtrl],
  ['when', '/dd/dd-data', DdDataCtrl],
  ['when', '/dd/dd-min', DdMinCtrl],
  ['when', '/dd/dd-max', DdMaxCtrl],


  // cloner directives
  ['when', '/ddcloners/dd-each-simple', DdEachSimpleCtrl],
  ['when', '/ddcloners/dd-each-doubledollar', DdEachDoubledollarCtrl],
  ['when', '/ddcloners/dd-each-doubledollar-subproperty', DdEachDoubledollarSubpropertyCtrl],
  ['when', '/ddcloners/dd-each', DdEachCtrl],
  ['when', '/ddcloners/dd-each-option', DdEachOptionCtrl],
  ['when', '/ddcloners/dd-each-html', DdEachHtmlCtrl],
  ['when', '/ddcloners/dd-each-3d-data', DdEach3DdataCtrl],
  ['when', '/ddcloners/dd-each2', DdEach2Ctrl],
  ['when', '/ddcloners/dd-each2complex', DdEach2ComplexCtrl],
  ['when', '/ddcloners/dd-repeat', DdRepeatCtrl],
  ['when', '/ddcloners/dd-entries', DdEntriesCtrl],


  // listener directives
  ['when', '/ddlisteners/dd-href', DdHrefCtrl],
  ['when', '/ddlisteners/dd-click', DdClickCtrl],
  ['when', '/ddlisteners/dd-keyup', DdKeyupCtrl],
  ['when', '/ddlisteners/dd-change', DdChangeCtrl],
  ['when', '/ddlisteners/dd-evt', DdEvtCtrl],
  ['when', '/ddlisteners/dd-set', DdSetCtrl],
  ['when', '/ddlisteners/dd-model', DdModelCtrl],
  ['when', '/ddlisteners/dd-model-dd-set', DdModelDdSetCtrl],
  ['when', '/ddlisteners/dd-outclick', DdOutclickCtrl],
  ['when', '/ddlisteners/dd-intersect', DdIntersectCtrl],
  ['when', '/ddlisteners/dd-swipe', DdSwipeCtrl],


  // model
  ['when', '/model/basic', ModelBasicCtrl],
  ['when', '/model/multilevel-object', ModelMultilevelObjectCtrl],


  // lib
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
const app = new App('dodoExamples');
app
  .httpClient($httpClient)
  .auth($auth)
  .i18n($i18n)
  .debug($debugOpts)
  .routes($routes)
  .listen();



