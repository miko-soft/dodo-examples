import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddForeachObj from '/views/pages/ddCloners/dd-foreach-obj.html?raw';



export default class DdForeachObjCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddForeach = true;
    this.setTitle('dd-foreach simple obj');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddForeachObj);
  }

  async __init(trx) {
    this.customers = [
      { id: 1, name: 'Mirko', age: 21, active: true },
      { id: 2, name: 'Žarko', age: 38, active: false },
      { id: 3, name: 'Josip', age: 42, active: true },
    ];

    this.someNumber = 5;
  }


  printCustomerName(name) {
    console.log('name::', name);
  }

  printObject(customer) {
    console.log('customer::', customer);
  }

}
