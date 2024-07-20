import { Controller, corelib } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import loadI18n from '/views/pages/view/loadI18n.html?raw';


export default class ViewLoadI18nCtrl extends Controller {

  constructor(app) {
    super();
  }

  __loader(trx) {
    this.setTitle('dd-i18n');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', loadI18n);
    this.loadI18n('en');
  }

  __init(trx) {
    this.$model.lang = trx.query.lang || 'en';

    this.setPageLanguage(this.$model.lang);

    corelib.eventEmitter.on('model-change', evt => {
      if (evt.detail.modelName === 'lang') {
        const language = evt.detail.modelValue;
        this.setPageLanguage(language);
      }
    });
  }


  setPageLanguage(language) {
    console.log('selected language::', language);
    this.setLang(language);
    this.loadI18n(language); // update $model.$i18n
    corelib.navig.goblind(`/view/loadi18n?lang=${language}`);
  }

}
