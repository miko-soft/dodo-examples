import { Controller } from '@mikosoft/dodo';

export default class I18nCtrl extends Controller {

  constructor(app) {
    super();
  }

  async loader(trx) {
    this.setTitle('DoDo - i18n');
    this.setDescription('The examples which shows how to use the DoDo Framework in single page application.');
    this.setKeywords('dodo, framework, javascript, js, single page app, spa');
    this.setLang('en');

    await this.loadView('#main', 'pages/i18n/main.html');
  }


  async init(trx) {

  }


  changeLang() {
    console.log('selected language::', this.$model.lang);
  }


}
