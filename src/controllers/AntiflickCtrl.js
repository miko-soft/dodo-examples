import { Controller, corelib } from '@mikosoft/dodo';

export default class AntiflickCtrl extends Controller {

  constructor(app) {
    super();
  }

  async loader(trx) {
    this.setTitle('DoDo - Antiflick');
    this.setDescription('The examples which shows how to use the DoDo Framework in single page application.');
    this.setKeywords('dodo, framework, javascript, js, single page app, spa');
    this.setLang('en');

    await this.loadView('#main', 'pages/antiflick/main.html');
  }


  async init(trx) {
    await corelib.util.sleep(2000);
    this.$model.showBtn = true;
    // this.showViews(true, true); // with spinner
    this.showViews(true, false); // no spinner
  }

  // if rend() is not defined then this.render() is used
  // async rend(trx) {
  // }

  async postrend(trx) {
    this.$model.showBtn = true;
  }


}
