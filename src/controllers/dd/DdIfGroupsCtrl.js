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


  setVars() {
    this.$model.varX = 5;
    this.$model.varY = 'Peter';
    this.$model.varZ = 10;
  }


  check_varX(opt) {
    if (opt === 'if' && this.$model.varX === 5) { return true; }
    if (opt === 'elseif1' && !this.$model.varX) { return true; }
    if (opt === 'elseif2' && this.$model.varX > 5) { return true; }
  }

  check_varY(opt) {
    if (opt === 'if' && !this.$model.varY) { return true; }
    if (opt === 'elseif' && this.$model.varY === 'Peter') { return true; }
  }

  check_varZ(opt) {
    if (opt === 'if1' && this.$model.varZ === 10) { return true; }
    if (opt === 'if2' && this.$model.varZ > 5) { return true; }
  }

}
