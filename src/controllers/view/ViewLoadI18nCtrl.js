import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import loadI18n from '/views/pages/view/loadI18n.html?raw';


export default class ViewLoadI18nCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    this.setTitle('dd-i18n');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', loadI18n);
    this.loadI18n('en');
  }


  setPageLanguage(language) {
    console.log('selected language::', language);
    this.setLang(language);
    this.loadI18n(language);
  }

}
