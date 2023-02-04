import { Controller, corelib } from '@mikosoft/dodo';

export default class Navig2Ctrl extends Controller {

  constructor(app) {
    super();
  }

  async loader(trx) {
    this.setTitle('DoDo - Navig 2');
    this.setDescription('The examples which shows how to use the DoDo Framework in single page application.');
    this.setKeywords('dodo, framework, javascript, js, single page app, spa');
    this.setLang('en');

    await this.loadView('#main', 'pages/navig2/main.html');
  }


  async destroy(pevent) {
    console.log('Navig2 destroy::', pevent);
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
