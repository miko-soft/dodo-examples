import { Controller } from '@mikosoft/dodo';
import navbar from '../../views/inc/navbar.html?raw';
import exejs from '../../views/pages/view/exejs.html?raw';
import jsContent from '../../public/js/dom-test.js?raw';



export default class ViewExeJSCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    this.setTitle('exeJS');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', exejs);
  }


  async exeJS_test() {
    await this.exeJS(jsContent); // jQuery script
  }

}
