import { Controller } from '@mikosoft/dodo';
import navbar from '../../views/inc/navbar.html?raw';
import ddStyle from '../../views/pages/dd/dd-style.html?raw';



export default class DdStyleCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddStyle = true;
    this.setTitle('dd-style');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddStyle);
  }



  // add style attribute values
  toggleSTYLE() {
    this.$model.myStajl = this.$model.myStajl ? null : { 'font-size': '28px', color: 'green' };
  }


}
