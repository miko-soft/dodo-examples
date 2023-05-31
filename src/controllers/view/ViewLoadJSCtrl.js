import { Controller, corelib } from '@mikosoft/dodo';
import navbar from '../../views/inc/navbar.html?raw';
import loadJS from '../../views/pages/view/loadJS.html?raw';



export default class ViewLoadJSCtrl extends Controller {

  constructor(app) {
    super();
  }

  async __loader(trx) {
    this.setTitle('loadJS');
    this.setDescription('The examples which shows how to use the DoDo Framework.');
    this.setKeywords('dodo, examples');
    this.setLang('en');
    this.loadView('#navbar', navbar);
    this.loadView('#main', loadJS);
  }

  async __destroy() {
    this.unloadAllJS_test();
  }


  popup() {
    $.notify('Hello Dodo, nice to meet you.');
    window.swal({
      icon: 'success',
      text: 'Hello DoDo. How are you?',
    });
  }

  // button function
  async loadJS_test() {
    console.info('Loading... Please wait.');
    this.loadJS('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js', { isModule: false, isDefer: false, isLazy: true }); // must be loaded before notify.min.js because notify require jQuery
    await corelib.util.sleep(400);
    this.loadJS('https://cdnjs.cloudflare.com/ajax/libs/notify/0.4.2/notify.min.js', { isModule: false, isDefer: false, isLazy: true });
    this.loadJS('https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js', { isModule: false, isDefer: false, isLazy: true });
    await corelib.util.sleep(400);
    console.info('Scripts are loaded. Now click on the POPUP button.');
  }

  unloadAllJS_test() {
    const opts = {
      isModule: false,
      isDefer: false,
      isLazy: true
    };
    this.unloadAllJS(opts);
    corelib.navig.reload();
  }

  unloadSweetalert_test() {
    this.unloadJS('https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js');
  }

}
