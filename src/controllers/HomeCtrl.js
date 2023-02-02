import { Controller } from '@mikosoft/dodo';

export default class HomeCtrl extends Controller {

  constructor(app) {
    super();
  }

  async loader(trx) {
    this.setTitle('DoDo Framework - Examples');
    this.setDescription('The examples which shows how to use the DoDo Framework in single page application.');
    this.setKeywords('dodo, framework, javascript, js, single page app, spa');
    this.setLang('en');

    await this.loadView('#main', 'pages/home/main.html');
  }


  async init(trx) {
  }

  async postrend(trx) {
  }

  async destroy(trx) {
  }

}
