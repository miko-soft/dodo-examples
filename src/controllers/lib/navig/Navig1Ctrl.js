import { Controller, corelib } from '@mikosoft/dodo';
import navbar from '../../../views/inc/navbar.html?raw';
import navig1 from '../../../views/pages/lib/navig/navig1.html?raw';




export default class Navig1Ctrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    this.setTitle('Navig1');
    this.setDescription('Test the Navig lib.');
    this.setKeywords('dodo, examples, Navig');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', navig1);
  }

  __init(trx) {
    console.log('navig1::', corelib.navig);
  }

  __destroy() {
    console.log('Navig1 destroy');
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
