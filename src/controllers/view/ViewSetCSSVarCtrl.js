import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import setcssvar from '/views/pages/view/setcssvar.html?raw';



export default class ViewSetCSSVarCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    this.setTitle('setCSSVar');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', setcssvar);
    this.setCSSVar('--demo-color', '#3498db');
    this.setCSSVar('--demo-size', '18px');
  }

  setBlue() { this.setCSSVar('--demo-color', '#3498db'); }
  setRed() { this.setCSSVar('--demo-color', '#e74c3c'); }
  setGreen() { this.setCSSVar('--demo-color', '#2ecc71'); }
  setLarge() { this.setCSSVar('--demo-size', '28px'); }
  setSmall() { this.setCSSVar('--demo-size', '14px'); }

}
