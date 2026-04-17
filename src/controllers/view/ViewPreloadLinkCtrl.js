import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import preloadlink from '/views/pages/view/preloadlink.html?raw';



export default class ViewPreloadLinkCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    this.setTitle('preloadLink');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', preloadlink);
    this.preloadLink('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap', 'style');
    this.preloadLink('/views/pages/home/main.html', 'fetch');
  }

}
