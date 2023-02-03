import { Controller } from '@mikosoft/dodo';

export default class View_loadViewsCtrl extends Controller {

  constructor(app) {
    super();
  }

  async loader(trx) {
    this.setTitle('DoDo - View#loadViews()');
    this.setDescription('The examples which shows how to use the DoDo Framework in single page application.');
    this.setKeywords('dodo, framework, javascript, js, single page app, spa');
    this.setLang('en');

    await this.loadView('#main', 'pages/view-loadviews/main.html');
    await this.loadViews([
      ['#part1', 'pages/view-loadviews/part1.html', 'sibling'],
      ['#part2', 'pages/view-loadviews/part2.html', 'append'],
      ['#part3', 'pages/view-loadviews/part3.html', 'prepend']
    ], true); // isAsync is true
  }


  async init(trx) {
  }

  async postrend(trx) {
  }

  async destroy(trx) {
  }

}
