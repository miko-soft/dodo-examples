import { Controller, corelib } from '@mikosoft/dodo';
import navbar from '../../views/inc/navbar.html?raw';
import hooks from '../../views/pages/controller/hooks.html?raw';



export default class ControllerHooksCtrl extends Controller {

  constructor(app) {
    super();
    // console.log('constructor() --app::', app);
  }

  async __loader(trx) {
    this.setTitle('Hooks');
    this.setDescription('The examples which shows how to use the DoDo Framework in single page application.');
    this.setKeywords('dodo, framework, javascript, js, single page app, spa');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', hooks);
    console.log('__loader() --trx::', trx);
  }


  async __init(trx) {
    console.log('__init() --trx::', trx);
    console.log('__init() --navig::', corelib.navig);
    console.log('__init() --ctrl::', this);
  }

  // if __rend() is not defined then controller's this.render() is used
  async __rend(trx) {
    console.log('__rend() --trx::', trx);
    await this.ddUNLISTEN();
    this.ddHref();
  }

  async __postrend(trx) {
    console.log('__postrend() --trx::', trx);
  }

  async __destroy() {
    console.log('__destroy() --navig::', corelib.navig);
    this.unloadCSS(['https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism-coy.min.css']);
    this.unloadJS();
  }

}
