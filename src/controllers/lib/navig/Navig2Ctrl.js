import { Controller, corelib } from '@mikosoft/dodo';
import navbar from '../../../views/inc/navbar.html?raw';
import navig2 from '../../../views/pages/lib/navig/navig2.html?raw';



export default class Navig2Ctrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    this.setTitle('Navig2');
    this.setDescription('Test the Navig lib.');
    this.setKeywords('dodo, examples, Navig');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', navig2);
  }

  __init(trx) {
    console.log('navig2::', corelib.navig);
  }

  __destroy() {
    console.log('Navig2 destroy');
  }



  runGOTO(url) {
    corelib.navig.goto(url);
  }

  runBACK() {
    corelib.navig.back();
  }

  runFORWARD() {
    corelib.navig.forward();
  }

  runRELOAD() {
    corelib.navig.reload();
  }


}
