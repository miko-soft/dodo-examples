import { Controller } from '@mikosoft/dodo';
import navbar from '../../views/inc/navbar.html?raw';
import ddSetinitial from '../../views/pages/dd/dd-setinitial.html?raw';



export default class DdSetinitialCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddSetinitial = true;
    this.setTitle('dd-setinitial');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddSetinitial);
  }

  async __init(trx) {
    this.years_old++;
  }


  showInputValue() {
    // input
    console.log('years_old::', typeof this.years_old, this.years_old);
    console.log('$model.isValid::', typeof this.$model.isValid, this.$model.isValid);

    // textarea
    console.log('my_text::', typeof this.my_text, this.my_text);
    console.log('$model.my_num::', typeof this.$model.my_num, this.$model.my_num);

    // select
    console.log('my_select::', typeof this.my_select, this.my_select);
  }

}
