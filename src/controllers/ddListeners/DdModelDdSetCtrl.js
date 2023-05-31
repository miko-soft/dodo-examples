import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddModelDdSet from '/views/pages/ddListeners/dd-model-dd-set.html?raw';



export default class DdModelDdSetCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddModel = true;
    this.setTitle('dd-model and dd-set,dd-value');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddModelDdSet);
  }


  // change the controller value and affect dd-model element
  runMODEL() {
    this.$model.myMDL = 'I changed it !!!';
  }

}
