import { Controller } from '@mikosoft/dodo';
import navbar from '../../views/inc/navbar.html?raw';
import headsetters from '../../views/pages/view/headsetters.html?raw';



export default class ViewHeadSettersCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    this.setTitle('HEAD Setters');
    this.setDescription('HEAD setters example.');
    this.setKeywords('dodo, examples, some keyword');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', headsetters);
  }

}
