import { Controller } from '@mikosoft/dodo';
import navbar from '/views/inc/navbar.html?raw';
import ddEvt from '/views/pages/ddListeners/dd-evt.html?raw';



export default class DdEvtCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    // this.$debugOpts.ddEvt = true;
    this.setTitle('dd-evt');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', ddEvt);
  }

  async __init() {
    this.products = [
      { name: 'Toy', price: 22.34 },
      { name: 'Flower', price: 88.56 },
    ];

    this.$model.cats = ['Kiki', 'Pepa'];
  }


  // change text collor on mouseover and click
  runEVT(elem, evt, boja) {
    // console.log('$element::', elem);
    // console.log('$event::', evt);
    elem.style.color = boja;
  }


  onKlik(opt) {
    if (opt === 1) {
      this.$model.changed_text2 = this.products[1].name;
    } else if (opt == 2) {
      this.$model.changed_text3 = this.$model.cats[0];
    } else if (opt == 3) {
      this.$model.changed_text4 = this.$model.cats[1];
    }
  }


}
