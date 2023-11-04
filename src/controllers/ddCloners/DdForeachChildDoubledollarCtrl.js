import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddForeachChildDoubledollar from '/views/pages/ddCloners/dd-foreach-child-doubledollar.html?raw';



export default class DdForeachChildDoubledollarCtrl extends Controller {

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
    this.loadView('#main', ddForeachChildDoubledollar);
  }

  async __init(trx) {
    this.fields = [
      { name: 'robot_id', value: '' },
      { name: 'task_id', value: '' }
    ];

    this.$model.robots = [
      { _id: 1, name: 'First Bot', ip: '123.23.23.1' },
      { _id: 2, name: 'Second Bot', ip: '123.23.23.2' }
    ];
  }


  getFieldvalue() {
    this.fields.forEach(field => console.log(field));
  }


}
