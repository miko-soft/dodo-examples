import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddIfGroups from '/views/pages/dd/dd-if-groups.html?raw';



export default class DdIfCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddIf = true;
    this.setTitle('dd-if groups');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddIfGroups);
  }

  async __init(trx) {
  }


  if1() {
    this.$model.varX = 5;
    this.$model.varY = 'Peter';
    this.$model.varZ = 10;
  }


  toggleIF() {
    this.$model.showX = !this.$model.showX;
    // console.log('toggleSHOW::', this.$model.showX);
  }

}
