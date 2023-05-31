import { Controller } from '@mikosoft/dodo';
import navbar from '../../views/inc/navbar.html?raw';
import plugcss from '../../views/pages/view/plugcss.html?raw';



export default class ViewPlugCSSCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    this.setTitle('plugCSS');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', plugcss);

    const cssRules = `
    p.green {
      font: 34px Times;
      color: green;
      font-weight: bold;
    }
    `;
    this.plugCSS(cssRules, '#my-css');
  }

  async __destroy() {
    this.unplugCSS('#my-css');
  }

}
