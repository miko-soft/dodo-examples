import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddForeachChildObj from '/views/pages/ddCloners/dd-foreach-child-obj.html?raw';



export default class DdForeachChildObjCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddForeach = true;
    this.setTitle('dd-foreach-child obj');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddForeachChildObj);
  }

  async __init(trx) {
    this.fields = [
      { prop: 'name' },
      { prop: 'size' }
    ];

    this.$model.companies = [
      { name: 'Cloud Ltd', size: 3 },
      { name: 'Roto Ltd', size: 5 }
    ];
  }


  foreachNested() {
    const rnd1 = Math.round((Math.random() * 100));
    const rnd2 = Math.round((Math.random() * 100));
    const rnd3 = Math.round((Math.random() * 100));
    this.$model.companies = [
      { name: 'Cloud Ltd', size: rnd1 },
      { name: 'Roto Ltd', size: rnd2 },
      { name: 'Zen Ltd', size: rnd3 }
    ];
  }


}
